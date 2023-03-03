import React from "react";
import { RouteObject } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";
import { TodoListPage, TodoDetailPage } from "@app/modules/Todo";
import AppLayout from "@app/components/layout/AppLayout";
import RootError from "@app/components/common/RootError";

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
      {
        path: '/todos',
        element: <TodoListPage />
      },
      {
        path: '/todos/single/:id',
        element: <TodoDetailPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      },
    ]
  }
]


export default routes;

