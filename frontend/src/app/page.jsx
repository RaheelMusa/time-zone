import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-100">
        <div className=" flex h-96 md:h-auto items-center mx-auto transition-all md:w-[80vw]   gap-5 justify-center">
          <div className=" md:w-[80vw] flex flex-col gap-5 md:gap-10 md:items-start px-5 w-full text-center md:text-start ">
            <h2 className="text-xl lg:text-8xl font-bold md:text-6xl  tracking-wider">
              Select Your New Perfect Style
            </h2>
            <p className="font-normal text-xl md:w-[770px] w-full  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              blanditiis mollitia porro. Maiores a eligendi accusantium
              consectetur, nostrum officiis saepe.
            </p>
           <Button  text="SHOP NOW"/>
          </div>
          <div className="hidden md:block">
            <img
              src="/watch.png.webp"
              alt="watch image"
              className="md:w-[300px] w-auto animate-pulse delay-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
