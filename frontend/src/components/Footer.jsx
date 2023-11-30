import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:w-[80vw] min-h-48 my-10  flex-col items-center flex mx-auto">
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 md:justify-between md:gap-20 text-center md:text-start lg:grid-cols-4">
          <div className="my-3">
            <Link href="/" className="md:text-3xl text-xl font-bold px-3">
              Time <span className="text-red-500">Zone</span>
            </Link>
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright ©2023 All rights reserved </p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
