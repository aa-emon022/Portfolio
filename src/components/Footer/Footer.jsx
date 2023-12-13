import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">Company</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/about" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Project
                </Link>
              </li>

              <li className="mb-4">
                <Link href="/home" className="hover:underline">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">
              Help center
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="https://www.linkedin.com/in/aaemon250997/"
                  className="hover:underline"
                >
                  LinkIn
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://github.com/aa-emon022"
                  className="hover:underline"
                >
                  Git-Hub
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.facebook.com/A.A.Emon022/"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            <p>{`Current Date: ${day} ${month} ${year}`}</p> All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link
              href="https://www.facebook.com/A.A.Emon022/"
              className="text-gray-900 hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>

            <Link
              href="https://github.com/aa-emon022"
              className="text-gray-400  hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link href="https://www.linkedin.com/in/aaemon250997/">
              <FontAwesomeIcon icon={faLinkedin} className="w-[1rem] h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
