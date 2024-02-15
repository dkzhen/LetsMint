import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div
      className={`text-white bg-primary bg-opacity-70  md:max-w-lg lg:max-w-4xl md:mx-auto mx-[8px] rounded-lg -mt-5 h-[60px] flex  justify-center items-center mb-5`}
    >
      <span className="font-extrabold mr-2">Powered by</span>
      <Image src={"/layerzero.svg"} width={111} height={30} alt={"lz"} />
    </div>
  );
}
