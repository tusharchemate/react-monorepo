// import { Pools } from "@myorg/pool";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ViewPostContainer from "./modules/posts/containers/view-post";
import { lazy } from "react";

// Lazy load the Pools component
const Pools = lazy(() =>
  import("@myorg/pool").then((module) => ({ default: module.Pools }))
);

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <h1>Welcome to My App!</h1>,
  },
  {
    path: "/pool",
    element: <Pools />,
  },
  {
    path: "/posts/:postId",
    element: <ViewPostContainer />,
  },
]);

const Routes = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
);
export default Routes;
