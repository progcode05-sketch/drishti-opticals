// src/components/UserInfo.tsx
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function UserInfo() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return user ? (
    <div>
      <p>Welcome, {user.displayName}</p>
      <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full" />
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  ) : (
    <p>User not logged in</p>
  );
}
