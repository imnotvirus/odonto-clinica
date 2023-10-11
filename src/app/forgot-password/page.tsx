/* eslint-disable @next/next/no-img-element */
import ForgotPasswordForm from "@/components/Form/ForgotPassword";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ForgotPassword() {
  const session = await getServerSession();
  const user = session?.user;
  if (user) {
    return redirect("/");
  }
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Forgot Password
        </h2>
      </div>

      <ForgotPasswordForm />
    </main>
  );
};

