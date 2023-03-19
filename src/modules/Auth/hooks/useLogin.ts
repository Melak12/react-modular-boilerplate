import { useCallback, useState } from "react"
import { UserAccount } from "../auth.types";
import { AuthError } from "firebase/auth";
import { LoginWithEmailAndPassword } from "../services/firebase-auth.service";
import { setAuthSession } from "../services/session.service";
import { mapUserAccount } from "../auth.helpers";

export default () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loggedInUser, setLoggedInUser] = useState<UserAccount | null>(null);

    const signInWithEmailAndPassword = useCallback(
        async (email: string, password: string) : Promise<void>=> {
            setLoading(true);
            setError(undefined);
            try {
                if (!email || !password) {
                    setError("Please enter your username and password");
                }

                const loginResult = await LoginWithEmailAndPassword(
                    email,
                    password
                );

                const user = loginResult.user;
                const token = await user.getIdToken();

                if (token && user) {
                    const currentUser = mapUserAccount(user)

                    setAuthSession(currentUser as UserAccount, token);

                    setLoggedInUser(currentUser);

                } else {
                    setError("Unable to get user or user token");
                }

            } catch (err) {
                setError((err as AuthError).message);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    return [error, loading, loggedInUser, signInWithEmailAndPassword] as const;
}