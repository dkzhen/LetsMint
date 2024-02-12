import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";

export default function Navbar() {
  const { open } = useWeb3Modal();

  return (
    <nav className="bg-[#18212d] text-white w-full py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between mx-auto px-3 md:px-0">
          <span className="self-center text-xl md:text-2xl md:py-2 font-semibold whitespace-nowrap dark:text-white">
            LetsMint
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            <div className="hidden md:flex">
              <w3m-network-button />
            </div>
            <w3m-button />
          </div>
        </div>
      </div>
    </nav>
  );
}
