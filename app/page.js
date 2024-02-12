"use client";
import Footer from "@/components/Footer";
import Mint from "@/components/Mint";
import Navbar from "@/components/Navbar";

import React, { useState } from "react";

export default function Home() {
  const [selectedButton, setSelectedButton] = useState("mint");

  const handleToggle = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        className="flex-1 overflow-y-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/map.png')" }}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Card */}
          <div className="max-w-full md:max-w-lg lg:max-w-4xl mx-auto">
            <div className="bg-primary text-white  shadow-md p-6 rounded-lg bg-opacity-70">
              {/* Toggle Buttons */}
              <div className="flex items-center justify-center mb-4 bg-black md:w-[300px] p-3 mx-auto text-slate-400 rounded-lg">
                <button
                  className={`toggle-button mr-4 ${
                    selectedButton === "mint"
                      ? "bg-blue-700 text-white hover:bg-blue-600"
                      : "bg-transparent hover:bg-slate-600 "
                  }  font-medium rounded-lg text-sm px-4 py-2 text-center`}
                  onClick={() => handleToggle("mint")}
                >
                  Mint NFT
                </button>
                <button
                  className={`toggle-button ${
                    selectedButton === "bridge"
                      ? "bg-blue-700 text-white hover:bg-blue-600"
                      : "bg-transparent hover:bg-slate-600"
                  } font-medium rounded-lg text-sm px-4 py-2 text-center`}
                  onClick={() => handleToggle("bridge")}
                >
                  Bridge NFT
                </button>
              </div>

              {/* Content of your card */}
              <div
                id="mintContent"
                className={`toggle-content ${
                  selectedButton !== "mint" ? "hidden" : ""
                }`}
              >
                {/* content mint */}
                <Mint />
                {/* end content mint */}
              </div>
              <div
                id="bridgeContent"
                className={`toggle-content ${
                  selectedButton !== "bridge" ? "hidden" : ""
                }`}
              >
                <p>Your Bridge content coming soon...</p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}
