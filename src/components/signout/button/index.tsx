'use client';
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton: React.FC = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut({
        redirect: true,
        callbackUrl: "/",
      })}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
