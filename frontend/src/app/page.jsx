"use client";
import Button from "@/components/Button";
import { CiHeart } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-200">
        <div className="md:flex md:container max-screen mx-auto md:pl-0  pl-5 items-center justify-between w-full px-5 ">
          <div className="flex md:w-1/2 md:h-1/2 flex-col justify-center my-5  gap-6 py-5 w-full">
            <h1 className="md:text-6xl lg:text-8xl font-bold text-2xl">
              Select your new Style
            </h1>
            <p className=" md:text-xl lg:text-2xl text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              aliquam pariatur doloribus voluptas illum dolor voluptatem ipsum
              est vel repudiandae. Dolorum est possimus cupiditate quasi
              corporis porro voluptas et commodi?
            </p>
            <Button text="SHOP NOW"></Button>
          </div>
          <div className="md:block hidden">
            <img
              src="/watch.png"
              alt="watch image"
              className="animate-pulse md:h-[500px] lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* New Arrivals */}

      <div className="container mx-auto pt-48 ">
        <h2 className="text-2xl md:text-5xl font-bold ml-16">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 px-1">
          <div className="relative p-5 ">
            <img
              src="/10004.png"
              className="md:w-96 w-full object-fit mx-auto hover:scale-105 transition-all hover:ease-in-out hover:duration-400"
            />
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="relative p-5 ">
            <img
              src="/10005.png"
              className="md:w-96 w-full object-fit mx-auto hover:scale-105 transition-all hover:ease-in-out hover:duration-400"
            />
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="relative p-5 ">
            <img
              src="/10006.png"
              className="md:w-96 w-full object-fit mx-auto hover:scale-105 transition-all hover:ease-in-out hover:duration-400"
            />
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      <div className="md:flex gap-5 mt-20">
        <div className="md:flex block mb-5 gap-5 ">
          <div>
            {" "}
            <img
              src="/10014.png"
              alt="watch image"
              className="object-cover w-full h-full md:h-[790px] mb-5 md:mb-0 block px-4 hover:scale-90 hover:duration-500 transition-all ease-in-out"
            />
          </div>
          <div>
            <img
              src="/10015.png"
              alt="watch image"
              className="object-cover  w-full md:h-[790px] block  px-4 hover:scale-90 hover:duration-500 transition-all ease-in-out"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <img
            src="/10016.png"
            alt="watch image"
            className="object-cover w-full md:h-1/2  block px-4 hover:scale-90 hover:duration-500 transition-all ease-in-out "
          />
          <img
            src="/10017.png"
            alt="watch image"
            className="object-cover w-full  block md:h-1/2 px-4 hover:scale-90 hover:duration-500 transition-all ease-in-out"
          />
        </div>
      </div>

      {/* Popular Items */}

      <div className="container mx-auto pt-48 mt-48">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-5xl mb-10 font-bold ml-16">
            Popular Items
          </h2>
          <p className="text-gray-500 md:w-[900px] mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            beatae repellat culpa cum saepe. Officiis quae voluptas eos, nisi
            quia quos dolores facilis accusantium. Aspernatur libero cum quaerat
            odit ex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-8 mt-5 px-1">
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10007.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10008.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10009.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10010.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10011.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
          <div className="p-5 md:p-0  ">
            <div className="group relative mb-5">
              <img
                src="/10012.png"
                className="w-full  object-cover mx-auto border-b-2 border-red-500 "
              />
              <span className="top-0 right-0 absolute opacity-0 group-hover:opacity-95 transition-all duration-700 cursor-pointer">
                <CiHeart size={35} />
              </span>
              <button className="h-0  bg-red-500 absolute bottom-0 w-full  ease-in-out duration-700 transition-all group-hover:h-16 group-hover:w-full font-bold text-white">
                Add to cart
              </button>
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-center mt-5">
              Thermo Ball Etip Gloves
            </h3>
            <p className="text-red-500 text-center text-2xl md:text-xl">
              $45,742
            </p>
          </div>
        </div>
        <div
          className="font-normal text-center"
          onClick={(e) => alert("heelo")}
        >
          <Button text="View More Product" />
        </div>
      </div>

      <div className="container md:w-[80vw] mx-auto py-48 ">
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-1/2 mb-5">
            <h2 className="font-bold lg:text-6xl md:text-4xl mt-5 mb-7">
              Watch Your Choice
            </h2>
            <p className="mb-5 md:text-xl text-base">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className="py-3  overflow-hidden relative group px-2  inline-flex text-white items-center bg-red-500 text-center font-semibold text-xl md:text-xl">
                <span className="w-0 duration-200  group-hover:w-full absolute left-0 group-hover:h-full bg-gray-500">
                    
                    </span>
                    <span className="z-10 block  uppercase">Show Watches </span>
              
            </button>
          </div>
          <div>
            <img
              src="/10012.png"
            />
          </div>
        </div>
      </div>
      <div className="container md:w-[80vw] mx-auto py-48 ">
        <div className="flex justify-between flex-wrap">
        <div>
            <img
              src="/10012.png"
            />
          </div>
          <div className="w-full md:w-1/2 mb-8">
            <h2 className="font-bold lg:text-6xl md:text-4xl mt-5 mb-7">
              Watch Your Choice
            </h2>
            <p className="mb-8 md:text-xl text-base">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
            <button className="py-3  overflow-hidden relative group px-2  inline-flex text-white items-center bg-red-500 text-center font-semibold text-xl md:text-xl">
                <span className="w-0 duration-200  group-hover:w-full absolute left-0 group-hover:h-full bg-gray-500">
                    
                    </span>
                    <span className="z-10 block  uppercase">Show Watches </span>
              
            </button>
          </div>
         
        </div>
      </div>

      
    </>
  );
}
