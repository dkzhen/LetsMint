import { networkAvailable } from "@/constants/network";
import { useChainId } from "@/libs/zustand/store";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Image from "next/image";
import React, { useState } from "react";
import { useAccount, useNetwork } from "wagmi";

export default function DropdownNetwork() {
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const setChainId = useChainId((state) => state.setId);

  const [dropdown, setDropdown] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleNetwork = (id, chainId) => {
    setChainId(chainId);
    chainId !== chain?.id && open({ view: "Networks" });
    setSelectedNetwork(id);
    setDropdown(false);
  };

  return (
    <>
      {isConnected && (
        <div
          onClick={toggleDropdown}
          className="flex gap-2 mt-24 cursor-pointer flex-row items-center justify-between pl-5 mb-[3px] bg-slate-700 p-3 mx-auto text-slate-400 rounded-lg"
        >
          <div className="flex flex-row items-center">
            <Image
              src={
                selectedNetwork === null
                  ? "/assets/switch.svg"
                  : networkAvailable[selectedNetwork].image
              }
              width={0}
              height={0}
              className="w-5 h-5 md:w-9 md:h-9"
              alt={
                selectedNetwork === null
                  ? "switch"
                  : networkAvailable[selectedNetwork].name
              }
            />
            <p className="text-lg md:text-xl pl-2 text-white">
              {selectedNetwork === null
                ? "Switch Network"
                : networkAvailable[selectedNetwork].name}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            {dropdown ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 18.75 7.5-7.5 7.5 7.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 7.5-7.5 7.5 7.5"
                />
              </>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            )}
          </svg>
        </div>
      )}
      {dropdown && (
        <div
          id={"style-14"}
          className={`flex cursor-pointer gap-2 flex-col pl-5 mb-4 bg-slate-700 max-h-[185px] p-3 mx-auto text-slate-400 rounded-lg ${
            networkAvailable.length > 3 && "overflow-y-auto "
          }`}
        >
          {networkAvailable.map((item, index) => (
            <div
              className="flex flex-row items-center mb-2 md:mb-4"
              key={item.id}
              onClick={() => handleNetwork(index, item.chain)}
            >
              <Image
                src={item.image}
                width={0}
                height={0}
                className="w-5 h-5 md:w-9 md:h-9"
                alt={item.name}
              />
              <p className="text-lg md:text-xl pl-2">{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
