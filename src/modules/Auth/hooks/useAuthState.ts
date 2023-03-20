import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@app/config/firebase.config";
import { UserAccount } from "../auth.types";
import { mapUserAccount } from "../auth.helpers";

type AuthStateOptions = {
  onUserChanged?: (user: UserAccount | null) => Promise<void>;
};

export default ( options?: AuthStateOptions) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [userAccount, setUserAccount] = useState<UserAccount|null>(mapUserAccount(auth.currentUser));

  useEffect(() => {
    const listener = onAuthStateChanged(
      auth,
      async (user) => {
        setLoading(false);
        console.log("Auth State is changed >> ", user);
        
        if (options?.onUserChanged) {
          // onUserChanged function to process custom claims on any other trigger function
          try {
            await options.onUserChanged(mapUserAccount(user));
          } catch (e) {
            setError((e as Error).message);
          }
        }
        setUserAccount(mapUserAccount(auth.currentUser));
      },
    );

    return () => {
      
      listener();
    };
  }, [auth]);

  return [userAccount, loading, error] as const;
};