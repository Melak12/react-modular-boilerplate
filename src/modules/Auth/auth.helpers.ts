import { User } from "firebase/auth";
import { UserAccount } from "./auth.types";

export const mapUserAccount = (user:User|null):UserAccount|null => {
    if(user == null || !user) return null;
    return {
        id: user.uid,
        name: user.displayName,
        email: user.email
    }
};