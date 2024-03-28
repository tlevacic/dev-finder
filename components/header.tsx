"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./theme-toggle";

export function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session.data ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn("google")}>Sign In</button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
