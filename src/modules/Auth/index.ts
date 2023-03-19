// todo: import all shared components
import React from "react";
import { useCurrentUser } from "./auth";
import useAuthState from "./hooks/useAuthState";
import useLogout from "./hooks/useLogout";
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

// todo: export all shared components
export {
    useCurrentUser,
    useAuthState,
    useLogout,
    LoginPage
}