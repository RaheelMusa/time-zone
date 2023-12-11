"use client";
import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Contact", url: "/contact" },
  { id: 3, title: "Shop", url: "/shop" },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
    sublinks: [
      {
        id: 42,
        title: "Blog",
        url: "",
      }, {
        id: 43,
        title: "Blog Detail",
        url: "",
      },
    ],
  },
  {
    id: 5,
    title: "Pages",
    url: "",
    sublinks: [
      {
        id: 51,
        title: "Login",
        url: "/login",
      },{
        id: 52,
        title: "Cart",
        url: "/cart",
      },{
        id: 53,
        title: "Element",
        url: "/element",
      },
      {
        id: 54,
        title: "Confirmation",
        url: "",
      },
      {
        id: 55,
        title: "Product",
        url: "",
      },
      {
        id:56, title: "checkout", url: ""
      },
    ],
  },
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
                  className="hover:text-red-500 cursor-pointer relative group py-2 hover:duration-100 duration-700 transition-all "
                >
                  {link.sublinks ? (
                    <ul>
                      <li>
                        {" "}
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    </ul>
                  )}
                  {link.sublinks && (
                    <ul className="hidden absolute z-10 left-0 bg-white px-6 border-t-2 border-red-500 py-4 space-y-2 group-hover:block mt-2 text-black rounded-md">
                      {link.sublinks.map((sublinkItem) => {
                        return (
                          <li key={sublinkItem.id} className=" hover:text-red-500">
                            <Link
                              href={sublinkItem.url}
                              className="hover:text-red-400"
                            >
                              {sublinkItem.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
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
