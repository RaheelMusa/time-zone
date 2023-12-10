import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-200">
        <div className="md:flex md:container mx-auto md:pl-0 pt-9 pl-5 items-center justify-between w-full px-5 ">
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
    </>
  );
}
