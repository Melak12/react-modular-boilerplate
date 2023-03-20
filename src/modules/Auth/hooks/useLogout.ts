import { useCallback, useState } from "react";
import { logOut } from "../services/firebase-auth.service";
import { endAuthSession } from "../services/session.service";

export default () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);


    const signoutUser = useCallback(async (): Promise<void> => {
        setLoading(true);
        setError(undefined);
        try {

            await logOut();

            // Clear Session
            endAuthSession();

            setStatus(true);

        } catch (err) {
            setError(`Unable to signout || ${err}`);
        } finally {
            setLoading(false);
        }
    }, []);


    return [error, loading,status, signoutUser] as const;
}