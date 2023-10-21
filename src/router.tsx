import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Nav } from "./routes";
import { DefaultThingForTest } from "./routes/vite-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <DefaultThingForTest />
      }
    ]
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
