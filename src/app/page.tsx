"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";

export default function Home() {
  const session = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn >
        <p>You are actually signed in</p>
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <p>You need to sign in</p>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
    </main>
  );
}
