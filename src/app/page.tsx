import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <main className="bg-gray-100">
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
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 md:justify-between py-12 md:py-20">
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
          <div className="md:w-1/2 ">
            <img
              className="h-96 w-full object-cover mt-10 md:mt-0 md:h-full md:w-full"
              src="https://media.istockphoto.com/id/1550606095/pt/foto/portrait-pointing-and-healthcare-award-with-a-woman-proud-of-her-medical-achievement-in-the.jpg?s=612x612&w=0&k=20&c=lfN3CWXvEXqamMp53c3m9BQBnSL81PVrJBbehb4rfLI="
              alt="Dental clinic"
            />
          </div>
        </div>
        <div className="bg-white ">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Services
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-gray-500">
                  We offer a wide range of dental services to meet your needs.
                  From routine cleanings to complex procedures, our team of
                  experienced dentists and dental hygienists are here to help
                  you achieve and maintain a healthy smile.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Preventive Care
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Regular checkups and cleanings can help prevent dental
                      problems before they start.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Restorative Care
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      We offer a variety of restorative treatments to repair
                      damaged teeth and restore your smile.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 9a6 6 0 00-3.95 10.95 3 3 0 014.26 0A6 6 0 0015 9z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Cosmetic Dentistry
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Our cosmetic dentistry services can help improve the
                        appearance of your teeth and give you the smile you&rsquo;ve
                      always wanted.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Emergency Care
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      If you have a dental emergency, we offer same-day
                      appointments to provide prompt care and relief.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 mt-11">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Book an appointment today and take the first step towards a
                healthier smile.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Book an appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
