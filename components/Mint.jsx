import React, { useState } from "react";
import Image from "next/image";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";
import { abi } from "@/utils/abi";
import ModalTransaction from "./ModalTransaction";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Mint() {
  const [randomId, setRandomId] = useState("");
  const [result, setResult] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();

  const generateRandomId = () => {
    const min = Math.pow(10, 0); // Angka terkecil untuk 1 digit
    const max = Math.pow(10, 6); // Angka terbesar untuk 6 digit
    const randomId = Math.floor(Math.random() * (max - min) + min); // Generate random number

    setRandomId(randomId.toString()); // Convert to string and set the state
  };

  const chainIdMint = isConnected ? chain.id : 5;

  const { data } = useContractRead({
    address: "0x18c6a99eE36608d38f3FE7193EC1507172e06873",
    abi: abi,
    chainId: chainIdMint,
    functionName: "rawOwnerOf",
    args: [Number(randomId)],
  });

  const handleCheckMint = () => {
    if (
      randomId === "" ||
      data == "0x0000000000000000000000000000000000000000"
    ) {
      generateRandomId();
    }
    setResult(true);
  };

  const {
    data: writeData,
    write,
    isSuccess,
    isLoading,
    isError,
  } = useContractWrite({
    address: "0x18c6a99eE36608d38f3FE7193EC1507172e06873",
    abi: abi,
    chainId: chainIdMint,
    functionName: "mint",
    args: [address, randomId],
  });

  const handleMint = () => {
    write?.();
    setOpenModal(true);
    setResult(false);
    setRandomId("");
  };

  return (
    <>
      {" "}
      {openModal && (
        <ModalTransaction
          openModal={openModal}
          setOpenModal={setOpenModal}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          hash={writeData?.hash}
        />
      )}
      {/* main */}
      <div className="text-3xl mt-8 border-b-[1px] border-slate-700 pb-7 md:text-4xl font-extrabold mb-4">
        Mint your NFT
      </div>
      {/* input tokenid */}
      <h2 className="text-xl md:text-2xl font-bold mb-2">Token ID</h2>
      <div className="input-container">
        <input
          type="text"
          className="bg-primary border border-none pr-[150px] py-5 md:pr-40 focus:ring-0 focus:outline-none focus:ring-white"
          placeholder="get random id"
          disabled
          value={randomId}
        />
        <button
          id="btn-generate"
          className="gradient-text mt-[15px] md:mt-[16px] mr-3 md:mr-6 hover:bg-red-50"
          type="button"
          onClick={generateRandomId}
          disabled={result}
        >
          Random
        </button>

        {/* view result */}
        {result ? (
          <div className="max-w-full md:max-w-lg lg:max-w-4xl mx-auto mt-2">
            <div className="bg-primary text-white  shadow-md p-2 rounded-lg bg-opacity-70">
              <h2 className="text-xl font-extrabold mt-1 ml-2 mb-4 border-b-[1px] pb-3 border-slate-700">
                Nova Dile NFT{" "}
                <span className="ml-2 gradient-text cursor-pointer">
                  #{randomId}
                </span>
              </h2>
              <p className="ml-2 mb-4">
                Nova Dile is a crocodile pixel NFT that lives in a world with
                collectible uses, and can bridge to other networks by utilizing
                Layerzero endpoint technology with the lowest possible
                destination chain fees. get it before it evolves!!
              </p>
              <img
                src="/nvd1.png"
                alt="Generated NFT"
                className="mx-auto w-44 md:w-60 md:h-60 h-44 mb-4"
              />
              {/* Toggle Buttons */}
              <div className="flex gap-2 flex-row items-center justify-start pl-5 mb-4 bg-slate-700  p-3 mx-auto text-slate-400 rounded-lg">
                <Image
                  src={"/arbitrum.svg"}
                  width={0}
                  height={0}
                  className="w-5 h-5 md:w-9 md:h-9"
                  alt={"arb"}
                />
                <p className="text-lg md:text-xl">Arbitrum</p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {/* end result */}
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-lg flex justify-center py-3 w-full"
        onClick={
          result
            ? isConnected
              ? chain.id == 5
                ? handleMint
                : () => open({ view: "Networks" })
              : () => open({ view: "Connect" })
            : handleCheckMint
        }
      >
        {result
          ? isConnected
            ? chain.id == 5
              ? "Mint"
              : "Switch Network"
            : "Connect Wallet"
          : "Check Mint"}
      </button>
    </>
  );
}
