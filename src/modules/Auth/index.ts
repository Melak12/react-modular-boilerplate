// Components
import React from "react";
import useAuthState from "./hooks/useAuthState";
import useLogout from "./hooks/useLogout";

// Types
import { UserAccount } from "./auth.types";

// Pages
const LoginPage = React.lazy(() => import("./pages/LoginPage"));



// Export
export {
    useAuthState,
    useLogout,
    LoginPage
};

// Export Types
export type { UserAccount };
