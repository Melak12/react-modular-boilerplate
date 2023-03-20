import { EmailAuthProvider, FacebookAuthProvider, GoogleAuthProvider, OAuthCredential } from "firebase/auth";

export type SignInMethod =
    | typeof EmailAuthProvider.PROVIDER_ID
    | typeof GoogleAuthProvider.PROVIDER_ID
    | typeof FacebookAuthProvider.PROVIDER_ID
    | "apple.com"
    | "anonymous";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UserAccount {
    id: string | number;
    email?: string|null;
    name?: string|null;
    photoURL?: string|null;
    isAnonymous: boolean;

}

export type ExistingAccount = {
    email: string;
    signInMethods: SignInMethod[];
    credential: OAuthCredential;
};
