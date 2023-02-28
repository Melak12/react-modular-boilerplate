import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages";
import BaseLayout from "../components/layout/BaseLayout";

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
    ]
  }
]


export default routes;

