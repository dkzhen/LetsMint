"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { goerli, gnosis, fantom, klaytn, sepolia } from "viem/chains";
import {
  bscTestnet,
  polygonMumbai,
  avalancheFuji,
  blastSepolia,
} from "@/constants/chains";
import { chainImages } from "@/constants/chainImages";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "Lets Mint",
  description: "Mint NFT",
  url: "https://letsmint.ethenanova.space",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  goerli,
  sepolia,
  bscTestnet,
  avalancheFuji,
  polygonMumbai,
  blastSepolia,
];
export const chainNames = chains;

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chainImages: chainImages,
  chains,

  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
