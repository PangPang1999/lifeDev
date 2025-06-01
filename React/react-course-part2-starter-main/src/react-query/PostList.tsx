import React from "react";
import usePost from "../hooks/usePost";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } = usePost(
    { pageSize }
  );
  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((p, index) => (
          <React.Fragment key={index}>
            {p.map((post) => {
              return (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              );
            })}
          </React.Fragment>
        ))}
      </ul>
      <div className="mt-3">
        <button
          className="btn btn-primary me-1"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading more..." : "Nothing more to load"}
        </button>
      </div>
    </>
  );
};

export default PostList;
