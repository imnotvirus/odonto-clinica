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
          <div className="flex gap-6">
            <svg
              className="w-8"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 259.444 259.444"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <g>
                      <g id="XMLID_30_">
                        <g>
                          <g>
                            <path
                              style={{ fill: "#EAEEEF" }}
                              d="M225.109,48.549c13.952,16.553,19.935,38.082,16.488,59.091 c-1.301,7.805-3.74,15.61-7.22,23.155l-46.147,99.677c-2.244,4.878-6.797,7.773-12.13,7.773c-5.138,0-9.529-2.667-11.87-7.187 l-14.439-54.082c-2.472-9.334-10.602-15.578-20.196-15.578c-9.561,0-17.691,6.244-20.163,15.578l-14.439,54.082 c-2.342,4.52-6.732,7.187-11.87,7.187c-5.333,0-9.886-2.894-12.13-7.773l-46.147-99.677 c-4.846-10.439-7.512-21.431-7.903-32.651c-0.748-19.805,6.537-38.733,20.456-53.269C51.806,29.818,71.969,21.2,92.717,21.2 c11.025,0,21.561,4,30.602,11.512c10.537,9.399,39.22,34.57,48.684,39.155c1.171,0.585,2.407,0.846,3.642,0.846 c3.155,0,6.146-1.789,7.61-4.846c2.016-4.228,0.26-9.301-3.968-11.35c-4.781-2.309-21.399-16.098-36.098-28.911 c7.22-4.195,15.155-6.407,23.383-6.407C189.173,21.199,210.507,31.183,225.109,48.549z M91.48,72.908 c3.285-3.317,3.285-8.683,0-12c-3.317-3.35-8.651-3.35-11.968,0l-7.74,7.805L64,60.907c-3.317-3.35-8.651-3.35-11.935,0 c-3.317,3.317-3.317,8.683,0,12l7.74,7.838l-7.74,7.838c-3.317,3.317-3.317,8.683,0,12c1.626,1.659,3.805,2.504,5.951,2.504 c2.179,0,4.325-0.846,5.984-2.504l7.773-7.805l7.74,7.805c1.659,1.659,3.837,2.504,5.984,2.504s4.325-0.846,5.984-2.504 c3.285-3.317,3.285-8.683,0-12l-7.773-7.838L91.48,72.908z"
                            ></path>
                          </g>
                          <g>
                            <path
                              style={{ fill: "#000" }}
                              d="M238.02,37.557c17.139,20.391,24.521,46.928,20.228,72.88 c-1.561,9.334-4.423,18.602-8.553,27.545l-46.147,99.677c-5.041,10.862-15.545,17.594-27.448,17.594 s-22.44-6.732-27.448-17.594c-0.228-0.455-0.39-0.911-0.52-1.398l-14.634-54.863c-0.715-2.602-2.732-2.992-3.903-2.992 c-1.138,0-3.155,0.39-3.87,2.992l-14.634,54.863c-0.13,0.488-0.293,0.943-0.52,1.398 c-5.008,10.862-15.545,17.594-27.448,17.594s-22.407-6.732-27.448-17.594L9.527,137.982 c-5.789-12.521-8.976-25.724-9.464-39.22C-0.848,74.306,8.096,50.989,25.234,33.07C42.796,14.727,67.414,4.191,92.716,4.191 c13.204,0,25.822,4.098,36.879,11.935c11.09-7.838,23.708-11.935,36.911-11.935C194.149,4.191,220.166,16.354,238.02,37.557z M241.597,107.64c3.447-21.009-2.537-42.538-16.488-59.091c-14.602-17.366-35.936-27.35-58.538-27.35 c-8.228,0-16.163,2.211-23.383,6.407c14.7,12.813,31.318,26.602,36.098,28.911c4.228,2.049,5.984,7.122,3.968,11.35 c-1.463,3.057-4.455,4.846-7.61,4.846c-1.236,0-2.472-0.26-3.642-0.846c-9.464-4.585-38.147-29.757-48.684-39.155 C114.277,25.2,103.74,21.2,92.716,21.2c-20.748,0-40.911,8.618-55.318,23.675c-13.92,14.536-21.204,33.464-20.456,53.269 c0.39,11.22,3.057,22.212,7.903,32.651l46.147,99.677c2.244,4.878,6.797,7.773,12.13,7.773c5.138,0,9.529-2.667,11.87-7.187 l14.439-54.082c2.472-9.334,10.602-15.578,20.163-15.578c9.594,0,17.724,6.244,20.196,15.578l14.439,54.082 c2.342,4.52,6.732,7.187,11.87,7.187c5.333,0,9.886-2.894,12.13-7.773l46.147-99.677 C237.857,123.25,240.296,115.445,241.597,107.64z"
                            ></path>
                          </g>
                          <g>
                            <path
                              style={{ fill: "#000" }}
                              d="M91.48,60.907c3.285,3.317,3.285,8.683,0,12l-7.773,7.838l7.773,7.838 c3.285,3.317,3.285,8.683,0,12c-1.659,1.659-3.837,2.504-5.984,2.504c-2.146,0-4.325-0.846-5.984-2.504l-7.74-7.805 L64,100.583c-1.659,1.659-3.805,2.504-5.984,2.504c-2.146,0-4.325-0.846-5.951-2.504c-3.317-3.317-3.317-8.683,0-12 l7.74-7.838l-7.74-7.838c-3.317-3.317-3.317-8.683,0-12c3.285-3.35,8.618-3.35,11.935,0l7.773,7.805l7.74-7.805 C82.829,57.558,88.163,57.558,91.48,60.907z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g>
                      <path
                        style={{ fill: "#C5CBCF" }}
                        d="M148.375,54.351c-9.773-8.114-19.731-16.891-25.057-21.639C114.277,25.2,103.74,21.2,92.716,21.2 c-20.748,0-40.911,8.618-55.318,23.675c-13.92,14.536-21.204,33.464-20.456,53.269c0.39,11.22,3.057,22.212,7.903,32.651 l46.147,99.677c2.244,4.878,6.797,7.773,12.13,7.773c5.138,0,9.529-2.667,11.87-7.187l8.085-30.287 c-13.734,19.74-25.955,4.92-25.955,4.92c-17.955-42.716-17.139-81.504-14.101-104.305c-1.486,1.109-3.229,1.701-5.005,1.701 c-2.146,0-4.325-0.846-5.951-2.504c-3.317-3.317-3.317-8.683,0-12l7.74-7.838l-7.74-7.838c-3.317-3.317-3.317-8.683,0-12 c3.285-3.35,8.618-3.35,11.935,0l7.773,7.805l0.042-0.042C86.413,43.918,125.272,48.787,148.375,54.351z"
                      ></path>
                    </g>
                    <path
                      style={{ fill: "#C5CBCF" }}
                      d="M154.164,193.346l10.069,37.708c2.342,4.52,6.732,7.187,11.87,7.187 c5.333,0,9.886-2.894,12.13-7.773l0.468-1.008C176.236,232.586,162.405,209.867,154.164,193.346z"
                    ></path>
                    <g>
                      <path
                        style={{ fill: "#C5CBCF" }}
                        d="M114.004,26.533l-0.081,0.673l6.504,3.288C118.352,28.988,116.206,27.677,114.004,26.533z"
                      ></path>
                      <path
                        style={{ fill: "#C5CBCF" }}
                        d="M225.109,48.549c-14.602-17.366-35.936-27.35-58.538-27.35c-8.228,0-16.163,2.211-23.383,6.407 c12.404,10.81,26.14,22.287,33.012,27.009c16.413,2.221,50.151,11.831,65.397,53.029 C245.044,86.632,239.06,65.103,225.109,48.549z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Odonto Clínica
            </h1>
          </div>
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
                      appearance of your teeth and give you the smile
                      you&rsquo;ve always wanted.
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
