"use client";
import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "" },
  { id: 2, title: "Contact", url: "" },
  { id: 3, title: "Blog", url: "" },
  { id: 4, title: "Pages", url: "" },
];
const Navbar = () => {
  return (
    <div className="text-base">
      <div className="flex justify-between items-center px-6 py-6 font-semibold">
        <Link href="/" className="md:text-3xl text-xl font-bold">
          Time <span className="text-red-500">Zone</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-5 items-center justify-center ">
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  url={link.url}
                  className="hover:text-red-500 cursor-pointer hover:duration-100"
                >
                  {link.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className="hover:text-red-500 cursor-pointer delay-100 hover:duration-200 hover:ease-in-out text-base md:text-2xl"
          >
            {" "}
            <CiSearch />
          </Link>
          <Link
            href="/"
            className="hover:text-red-500 cursor-pointer delay-100 hover:duration-200 hover:ease-in-out text-base md:text-2xl"
          >
            {" "}
            <CiUser />
          </Link>
          <Link
            href="/"
            className="hover:text-red-500 cursor-pointer delay-100 hover:duration-200 hover:ease-in-out text-base md:text-2xl"
          >
            {" "}
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
