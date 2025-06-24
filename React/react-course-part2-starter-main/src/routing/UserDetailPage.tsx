import { useParams } from "react-router-dom";

const UserDetailPage = () => {
  const user = useParams();
  return <p>user {user.id}</p>;
};

export default UserDetailPage;
