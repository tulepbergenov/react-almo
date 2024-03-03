import { useState } from "react";
import { PostForm, PostList } from "./components";

export const App = () => {
  const [posts, setPosts] = useState<
    {
      id: string;
      title: string;
      body: string;
    }[]
  >([]);

  const createPost = (post: { id: string; title: string; body: string }) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const deletePost = (id: string) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <main className="flex-fill py-4">
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <header>
                <h1 className="py-3">Hello World</h1>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <PostForm createPost={createPost} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PostList deletePost={deletePost} posts={posts} title={"Posts"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
