import { RouterProvider, createHashRouter, redirect } from "react-router-dom";
import { Nav, Overview, Result, DefaultThingForTest } from "./routes";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          path: "",
          element: <DefaultThingForTest />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "result",
          element: <Result />,
        },
      ],
    },
    {
      path: "/*",
      loader: () => redirect("/"),
    },
  ],
);

const Router = () => <RouterProvider router={router} />;

export default Router;
