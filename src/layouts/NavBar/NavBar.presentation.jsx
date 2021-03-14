import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";

function NavBarPresentation(props) {
  const { scrollStatus } = props;

  const isFixed = clsx({ fixed: scrollStatus, hidden: !scrollStatus });

  return (
    <div className={"container mx-auto px-4 z-50 " + isFixed}>
      <nav className="flex flex-row justify-between py-3">
        <Link href="/">
          <a className="pl-2">
            <Image src="/logo.png" alt="Logo" width="50" height="50" />
          </a>
        </Link>
        <ul className="flex space-x-6 pt-1">
          <ul>
            <form className="flex flex-row">
              <input
                placeholder="Search"
                className="px-4 placeholder-gray-300 subpixel-antialiased border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded"
              />
              <button
                type="submit"
                className="focus:outline-none cursor-pointer tracking-widest bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded block text-2xl font-semibold px-2 py-1"
              >
                <BsSearch />
              </button>
            </form>
          </ul>

          <li>
            <Link href="/">
              <a className="tracking-widest bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded block text-2xl font-semibold px-2 py-1">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a className="tracking-widest bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded block text-2xl font-semibold px-2 py-1">
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="tracking-widest bg-gray-100 bg-opacity-70 hover:bg-opacity-100 rounded block text-2xl font-semibold px-2 py-1">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="tracking-widest bg-theme-color-4 bg-opacity-85 hover:bg-opacity-100 rounded block text-2xl font-semibold px-2 py-1">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarPresentation;
