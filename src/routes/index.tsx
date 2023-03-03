import React from "react";
import { RouteObject } from "react-router-dom";
import { HomePage } from "../pages";
import {RootError } from "../components";
import { TodoListPage, TodoDetailPage } from "@app/modules/Todo";
import TodoList from "@app/modules/Todo/components/TodoList.component";
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
      {
        path: '/todo',
        element: <TodoListPage />
      },
    ]
  }
]


export default routes;

