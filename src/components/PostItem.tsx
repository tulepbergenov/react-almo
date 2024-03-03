export const PostItem = ({
  post,
  deletePost,
}: {
  post: {
    id: string;
    title: string;
    body: string;
  };
  deletePost: (id: string) => void;
}) => {
  return (
    <article className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => deletePost(post.id)}
          >
            Delete&nbsp;
            <span>
              <i className="bi bi-trash"></i>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
