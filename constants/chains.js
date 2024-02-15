export const avalancheFuji = {
  id: 43113,
  name: "Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
    },
    public: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959,
    },
  },
  testnet: true,
};
export const polygonMumbai = {
  id: 80001,
  name: "Mumbai",
  network: "maticmum",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"],
    },
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"],
    },
    public: {
      http: ["https://rpc.ankr.com/polygon_mumbai"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160,
    },
  },
  testnet: true,
};
export const blastSepolia = {
  id: 168587773,
  name: "Blast Sepolia",
  network: "blast-spolia",
  nativeCurrency: {
    decimals: 18,
    name: "Blast Sepolia",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"],
    },
    public: {
      http: ["https://sepolia.blast.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "blasScan",
      url: "https://testnet.blastscan.io",
    },
    default: {
      name: "blasScan",
      url: "https://testnet.blastscan.io",
    },
  },
  testnet: true,
};
export const bscTestnet = {
  id: 97,
  name: "BNB Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: {
      http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
    },
    public: {
      http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
    },
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483,
    },
  },
  testnet: true,
};
