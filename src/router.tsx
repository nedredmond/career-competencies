import {
  Outlet,
  RouterProvider,
  createHashRouter,
  redirect,
} from "react-router-dom";
import {
  Nav,
  Overview,
  Result,
  Prompt,
  promptLoader,
} from "./routes";

const router = createHashRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "",
        loader: () => redirect("/overview"),
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "questionnaire",
        element: (
          <>
            <div>Questionnaire</div>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "prompt/:id",
            loader: promptLoader,
            element: <Prompt />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    loader: () => redirect("/"),
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
