import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center ">
        {/* Logo / Home / Text */}

        <div className="flex flex-col name">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                Praveen Nithiyananda
              </h1>
              <p className="text-base font-light text-gray-500 dark:text-gray-300">
                Software Engineer <ThemeSwitch></ThemeSwitch>
              </p>
            </a>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block lowercase font-bold main-navigation ">
          <Link href="/">
            <a>About </a>
          </Link>

          <Link href="/links">
            <a>Links </a>
          </Link>
          <Link href="/moreInfo">
            <a>More Info</a>
          </Link>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4 main-navigation">
        <Link href="/">
          <a className="text-base lowercase font-bold ">About</a>
        </Link>
        <Link href="/links">
          <a className="text-base lowercase font-bold ">Links</a>
        </Link>
        <Link href="/moreInfo">
          <a className="text-base lowercase font-bold ">More Info</a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
