import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages";
import { BaseLayout, RootError } from "../components";
import AppLayout from "@app/components/layout/AppLayout";

const routes: RouteObject[] = [
  {
    path: '',
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
    ]
  }
]


export default routes;

