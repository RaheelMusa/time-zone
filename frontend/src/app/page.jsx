import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center  bg-gray-100 gap-5 justify-center">
        <div className="md:w-[60vw] mx-auto block w-full">
          <h2 className="text-xl md:text-7xl font-bold w-[50vw]">
            Select Your New Perfect Style
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            blanditiis mollitia porro. Maiores a eligendi accusantium
            consectetur, nostrum officiis saepe.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="/watch.png.webp"
            alt="watch image"
            className="md:w-[300px] w-full"
          />
        </div>
      </div>
      <div className="flex items-center  bg-gray-100 gap-5 justify-center">
        <div className="md:w-[60vw] mx-auto block w-full">
          <h2 className="text-xl md:text-7xl font-bold w-[50vw]">
            Select Your New Perfect Style
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            blanditiis mollitia porro. Maiores a eligendi accusantium
            consectetur, nostrum officiis saepe.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="/watch.png.webp"
            alt="watch image"
            width={300}
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}
