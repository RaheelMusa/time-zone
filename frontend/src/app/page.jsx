import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-100">
        <div className=" flex items-center mx-auto transition-all gap-5 justify-center">
          <div className=" md:w-[80vw] flex mx-auto  flex-col gap-5 md:gap-10 md:items-start px-5 w-full text-center md:text-start ">
            <h2 className="text-2xl lg:text-8xl font-bold md:text-2xl ">
              Select Your New Perfect Style
            </h2>
            <p className="font-normal text-xl md:w-[770px] w-full  ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              blanditiis mollitia porro. Maiores a eligendi accusantium
              consectetur, nostrum officiis saepe.
            </p>
            <Button text="SHOP NOW" />
          </div>
          <div className="hidden md:block">
            <img
              src="/watch.png"
              alt="watch image"
              className=" animate-pulse w-full delay-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
