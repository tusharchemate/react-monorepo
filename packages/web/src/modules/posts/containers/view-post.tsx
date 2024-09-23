import { useParams } from "react-router-dom";
import usePost from "../../../hooks/usePosts";

const ViewPostContainer = () => {
  const { postId } = useParams();
  const { data, error } = usePost(Number(postId));

  return (
    <div>
      <h1>Posts</h1>
      {error && <p>Error fetching post: {error.message}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default ViewPostContainer;
