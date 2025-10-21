// src/components/Login.tsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}
