import { auth } from "@app/config/firebase.config";
import { ExistingAccount, SignInMethod } from "../auth.types";
import { FacebookAuthProvider, GoogleAuthProvider, OAuthCredential, UserCredential, fetchSignInMethodsForEmail, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";


export function LoginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle(email: string): Promise<UserCredential> {
  // https://developers.google.com/identity/protocols/oauth2/web-server
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  provider.setCustomParameters({
    ...(email && { login_hint: email }),
    prompt: "consent",
  });

  return signInWithPopup(auth, provider);
}

export function loginAnonymously(): Promise<UserCredential> {
  return signInAnonymously(auth);
}

export async function getExistingAccountFromError(
  error: FirebaseError | Error | unknown,
  method: SignInMethod,
): Promise<ExistingAccount | undefined> {
  if (
    !(error instanceof FirebaseError) ||
    error.code !== "auth/account-exists-with-different-credential" ||
    !error.customData?.email
  ) {
    return undefined;
  }

  const email = error.customData?.email as string;
  const signInMethods = (await fetchSignInMethodsForEmail(
    auth,
    email,
  )) as SignInMethod[];

  if (signInMethods.length === 0) {
    return undefined;
  }

  let credential: OAuthCredential | null = null;

  if (method === GoogleAuthProvider.PROVIDER_ID) {
    credential = GoogleAuthProvider.credentialFromError(error);
  }

  if (method === FacebookAuthProvider.PROVIDER_ID) {
    credential = FacebookAuthProvider.credentialFromError(error);
  }

  return credential ? { email, credential, signInMethods } : undefined;
}

export async function logOut():Promise<void> {
  return signOut(auth);
}