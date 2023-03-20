import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";
import { TodoListPage, TodoDetailPage } from "@app/modules/Todo";
import { LoginPage, useAuthState } from "@app/modules/Auth";
import AppLayout from "@app/components/layout/AppLayout";
import RootError from "@app/components/common/RootError";

function GuardedRoute({ child }: any) {
  const [userAccount] = useAuthState();
   return userAccount ? child : <Navigate to='/login' replace />
}

const routes: RouteObject[] = [
  {
    path: '',
    element: <AppLayout />,
    errorElement: <RootError />,
    children: [
      {
        path: '/',
        element: <GuardedRoute child={<HomePage/>} />
      },
      {
        path: '/todos',
        element: <TodoListPage />
      },
      {
        path: '/login',
        element: <LoginPage/>
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

