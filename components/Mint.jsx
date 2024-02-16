import React, { useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
} from "wagmi";
import { abi } from "@/utils/abi";
import ModalTransaction from "./partials/ModalTransaction";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import DropdownNetwork from "./partials/DropdownNetwork";
import Image from "next/image";
import { chainNames } from "@/libs/wallet-connect/Web3Modal";
import DetailItem from "./atom/DetailItem";
import { chainImages } from "@/constants/chainImages";
import { config } from "@/constants/config";

export default function Mint() {
  const [randomId, setRandomId] = useState("");
  const [result, setResult] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dropdownDetails, setDropdownDetails] = useState(false);
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();

  const generateRandomId = () => {
    const min = Math.pow(10, 0); // Angka terkecil untuk 1 digit
    const max = Math.pow(10, 6); // Angka terbesar untuk 6 digit
    const randomId = Math.floor(Math.random() * (max - min) + min); // Generate random number

    setRandomId(randomId.toString()); // Convert to string and set the state
  };

  const findByChain =
    isConnected && config.find((item) => item.chain === chain?.id);
  const contract =
    findByChain != false
      ? findByChain.contract
      : "0x0000000000000000000000000000000000000000";
  const chainIdMint = findByChain != false ? findByChain.chain : "1";

  const { data } = useContractRead({
    address: contract,
    abi: abi,
    chainId: chainIdMint,
    functionName: "rawOwnerOf",
    args: [Number(randomId)],
  });

  const handleCheckMint = () => {
    if (
      randomId === "" ||
      data != "0x0000000000000000000000000000000000000000"
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
    address: contract,
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

  const handleToggleDropdownDetails = () => {
    setDropdownDetails(!dropdownDetails);
  };

  const filteredNetworks = chainNames.filter(
    (network) => network.id === chain?.id
  );
  const filteredLogoNetworks =
    chainImages[filteredNetworks.map((network) => network.id)];

  const nameNetwork = filteredNetworks.map((network) => network.name);
  const chainIdNetwork = filteredNetworks.map((network) => network.id);

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
          explorer={findByChain != undefined ? findByChain.explorer : ""}
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
              <h3 className="flex flex-row items-center mb-1">
                <Image
                  className=" pl-2 h-8 w-8"
                  src={"/assets/desc_logo.svg"}
                  alt="desc"
                  width={0}
                  height={0}
                />
                <p className="pl-2 text-lg font-bold">Description</p>
              </h3>

              <p className="ml-2 mb-4">
                Nova Dile is a crocodile pixel NFT that lives in a world with
                collectible uses, and can bridge to other networks by utilizing
                Layerzero endpoint technology with the lowest possible
                destination chain fees. get it before it evolves!!
              </p>
              <h3
                onClick={handleToggleDropdownDetails}
                className={`flex flex-row justify-between bg-slate-700 py-2  cursor-pointer items-center  pr-2 md:pr-10 ${
                  !dropdownDetails ? "rounded-lg" : "rounded-t-lg"
                }`}
              >
                <div className="flex flex-row items-center ">
                  <Image
                    className=" pl-2 h-8 w-8"
                    src={"/assets/detail_logo.svg"}
                    alt="desc"
                    width={0}
                    height={0}
                  />
                  <p className="pl-2 text-lg font-bold">Details</p>
                </div>

                {dropdownDetails ? (
                  <Image
                    className="w-7 h-7"
                    src={"/assets/single-arrow-up.svg"}
                    alt="arrow-up"
                    width={0}
                    height={0}
                  />
                ) : (
                  <Image
                    className="w-7 h-7"
                    src={"/assets/single-arrow-down.svg"}
                    alt="arrow-down"
                    width={0}
                    height={0}
                  />
                )}
              </h3>
              {dropdownDetails && (
                <div className="pl-2 pb-2 pt-2 mb-4 flex flex-col bg-slate-700 rounded-b-lg ">
                  <DetailItem
                    title={"Contract Address"}
                    data={
                      contract.substring(0, 6) +
                      "...." +
                      contract.substring(contract.length - 4)
                    }
                    link={findByChain.explorer + "/address/" + contract}
                  />
                  <DetailItem title={"Token ID"} data={randomId} link={null} />
                  <DetailItem
                    title={"Token Standard"}
                    data={"ERC721"}
                    link={null}
                  />
                  <DetailItem
                    title={"Network"}
                    data={nameNetwork}
                    link={null}
                  />
                </div>
              )}
              <div className="relative items-center flex-col flex justify-center">
                <img
                  src={`/nfts/nvd${randomId
                    .toString()
                    .charAt(randomId.toString().length - 1)}.png`}
                  alt="Generated NFT"
                  className="mx-auto w-44 md:w-60 md:h-60 h-44 mb-4 mt-10 rounded-lg"
                />
                {isConnected && filteredNetworks.length > 0 ? (
                  <img
                    src={filteredLogoNetworks}
                    alt={nameNetwork}
                    className="absolute -bottom-16 md:-bottom-20 w-16 h-16 md:w-20 md:h-20 rounded-lg"
                  />
                ) : (
                  isConnected && (
                    <img
                      src={"/assets/images/sad.png"}
                      alt={"sad"}
                      className="absolute -bottom-16 md:-bottom-20 rounded-lg"
                    />
                  )
                )}
                {isConnected && filteredNetworks.length > 0 ? (
                  <div
                    style={{ fontFamily: "Protest Riot" }}
                    className="relative font-protest font-normal gradient-name-network text-xl md:text-3xl"
                  >
                    {nameNetwork}
                  </div>
                ) : (
                  isConnected && (
                    <div
                      style={{ fontFamily: "Protest Riot" }}
                      className="relative font-protest font-normal gradient-name-network text-xl md:text-3xl"
                    >
                      Network is not supported
                    </div>
                  )
                )}
              </div>

              {/* togle button mainnet testnet */}

              {/* Toggle Buttons */}
              {isConnected && <DropdownNetwork />}

              {/* toogle button end */}
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
              ? chain?.id == chainIdNetwork
                ? handleMint
                : () => open({ view: "Networks" })
              : () => open({ view: "Connect" }, setResult(false))
            : handleCheckMint
        }
      >
        {result
          ? isConnected
            ? chain?.id == chainIdNetwork
              ? "Mint"
              : "Switch Network"
            : "Connect Wallet"
          : "Check Available"}
      </button>
    </>
  );
}
