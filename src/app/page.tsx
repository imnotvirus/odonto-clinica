import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <main className="bg-gray-100 h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Odonto Clínica
          </h1>
          <Link
            href={user ? "/admin" : "/admin/signin"}
            className="text-base font-medium text-indigo-600 hover:text-indigo-500"
          >
            {user ? "Admin" : "Sign in"}
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-12 md:py-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-indigo-600">Odonto Clínica</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We are a dental clinic that provides high-quality dental care to
              our patients. Our team of experienced dentists and dental
              hygienists are dedicated to helping you achieve and maintain a
              healthy smile.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Book an appointment
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
