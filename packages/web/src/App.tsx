import { Suspense, lazy } from "react";
import "./App.css";
import "./index.css";
import { useClientsContext } from "./client";
import { useQuery } from "react-query";
import Routes from "./Routes";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  // const { getOrgClient } = useClientsContext();

  // const fetchPosts = async () => {
  //   return await getOrgClient()?.PostService?.getPosts(2);
  // };

  // const { data } = useQuery({
  //   queryKey: "posts",
  //   queryFn: fetchPosts,
  //   onSuccess: (data) => {
  //     console.log("Fetched posts successfully:", data);
  //   },
  //   onError: (err) => {
  //     console.error("Error fetching posts:", err);
  //   },
  // });

  // console.log("=>post data", data);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  );
};

export default App;
