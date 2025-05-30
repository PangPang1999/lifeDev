import { useState } from "react";
import usePost from "../hooks/usePost";

const PostList = () => {
  const [userId, setUserId] = useState(0);
  const { data, error, isLoading } = usePost(userId);
  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        value={userId}
        className="form-select mb-3"
        onChange={(e) => setUserId(parseInt(e.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
