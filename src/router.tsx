import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Nav, Overview, Result, DefaultThingForTest } from "./routes";

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
], {
  basename: "/career-competencies",
});

const Router = () => <RouterProvider router={router} />;

export default Router;
