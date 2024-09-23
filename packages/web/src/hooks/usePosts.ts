import { useQuery } from "react-query";
import { useClientsContext } from "../client";
import { GetPostsResponse } from "@myorg/client/src/services/demo-service/api-view";

const usePost = (postId: number) => {
  const { getOrgClient } = useClientsContext();

  const fetchPost = async () => {
    const client = getOrgClient();
    if (!client) throw new Error("Org client not available.");
    return await getOrgClient()?.PostService?.getPosts(postId);
  };

  return useQuery<GetPostsResponse, Error>({
    queryFn: fetchPost,
    queryKey: ["PostId", postId],
    onSuccess: (data) => {
      console.log("Fetched data", data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default usePost;
