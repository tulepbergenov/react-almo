import { FormEvent, useId, useState } from "react";
import { v4 as uuid } from "uuid";
import { MyButton, MyInput } from "./ui-kit";

export const PostForm = ({
  createPost,
}: {
  createPost: (post: { id: string; title: string; body: string }) => void;
}) => {
  const titleId = useId();
  const bodyId = useId();

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const onAddNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!post.title || !post.body) {
      return;
    }

    createPost({
      id: uuid(),
      title: post.title,
      body: post.body,
    });

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={onAddNewPost}>
      <div className="mb-3">
        <label className="form-label" htmlFor={titleId}>
          Title
        </label>
        <MyInput
          aria-describedby="title"
          className="form-control"
          id={titleId}
          type="text"
          value={post.title}
          onChange={(e) =>
            setPost((prevPost) => ({
              ...prevPost,
              title: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor={bodyId}>
          Body
        </label>
        <textarea
          className="form-control"
          id={bodyId}
          style={{
            minHeight: "100px",
            maxHeight: "100px",
          }}
          value={post.body}
          onChange={(e) =>
            setPost((prevPost) => ({
              ...prevPost,
              body: e.target.value,
            }))
          }
        />
      </div>
      <MyButton type="submit">Add Post</MyButton>
    </form>
  );
};
