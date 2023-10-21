import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Nav, Overview, Result } from "./routes";
import { DefaultThingForTest } from "./routes/vite-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        element: <DefaultThingForTest />
      },
      {
        path: "overview",
        element: <Overview />
      },
      {
        path: "result",
        element: <Result />
      }
    ]
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
