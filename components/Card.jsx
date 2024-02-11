"use client";
import React, { useState } from "react";
import Button from "./Button";

export default function Card() {
  const [namaNFT, setNamaNFT] = useState("");
  const [deskripsiNFT, setDeskripsiNFT] = useState("");

  const handleGenerateAuto = () => {
    // Logika untuk menghasilkan NFT otomatis
    console.log("Generate Auto clicked");
  };

  const handleLetsMint = () => {
    // Logika untuk melakukan proses minting
    console.log("Lets Mint clicked");
  };

  return (
    <div className="bg-[#18212d] p-8 rounded-lg shadow-lg text-white bg-opacity-50">
      <div className="text-4xl font-extrabold mb-4">Mint</div>
      <div className="flex flex-col space-y-6">
        <div className="hidden md:flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Generate NFT</h2>
          </div>
          <Button onClick={handleGenerateAuto} className="w-20 h-10">
            Generate Auto
          </Button>
          <img src="/nvd1.png" alt="Generated NFT" className="w-24 h-24" />
        </div>
        <div className="flex md:hidden  flex-col justify-between mb-4">
          <div className="flex justify-start">
            <h2 className="text-2xl font-bold mb-4 ">Generate NFT</h2>
          </div>
          <img
            src="/nvd1.png"
            alt="Generated NFT"
            className="mx-auto w-44 h-44 mb-4"
          />
          <Button onClick={handleGenerateAuto} className="w-20 h-10">
            Generate Auto
          </Button>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Form Nama NFT</h2>
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              placeholder="Nama NFT"
              value={namaNFT}
              onChange={(e) => setNamaNFT(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black flex-1"
            />
            <button className="text-white bg-blue-700  font-medium rounded-lg text-sm  h-[42px] px-3 text-center ">
              Generate Name
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Form Deskripsi NFT</h2>
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              placeholder="Deskripsi NFT"
              value={deskripsiNFT}
              onChange={(e) => setDeskripsiNFT(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-black flex-1"
            />
            <button
              type="button"
              className="text-white bg-blue-700  font-medium rounded-lg text-sm  h-[42px] px-3 text-center "
            >
              Generate Auto
            </button>
          </div>
        </div>

        <div
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg flex justify-center py-3 w-full"
          onClick={handleLetsMint}
        >
          Lets Mint
        </div>
      </div>
    </div>
  );
}
