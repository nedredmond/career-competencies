import {
  Outlet,
  RouterProvider,
  createHashRouter,
  redirect,
} from "reactrouter";
import {
  Root,
  Overview,
  Result,
  Prompt,
  questionnaireLoader,
  Profile,
} from "./routes";
import { loader } from "./loader";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        loader,
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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "questionnaire",
        element: <Outlet />,
        children: [
          {
            path: "skill/:id",
            loader: questionnaireLoader,
            element: <Prompt />,
          },
          {
            path: "*?",
            loader: questionnaireLoader,
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
