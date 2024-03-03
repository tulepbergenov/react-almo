import { PostItem } from "./PostItem";

export const PostList = ({
  title,
  posts,
  deletePost,
}: {
  title: string;
  posts: {
    id: string;
    title: string;
    body: string;
  }[];
  deletePost: (id: string) => void;
}) => {
  return (
    <div>
      <h2 className="text-center mb-3">{title}</h2>
      <div className="d-flex flex-column gap-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostItem deletePost={deletePost} key={post.id} post={post} />
          ))
        ) : (
          <p className="text-center">No posts available</p>
        )}
      </div>
    </div>
  );
};
