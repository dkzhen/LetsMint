const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://letsmint.ethenanova.space";

export const chainImages = {
  5: url + "/chains/ethereum.svg",
  97: url + "/chains/bnb.svg",
  80001: url + "/chains/polygon_1.svg",
  43113: url + "/chains/avalanche.svg",
  8217: url + "/chains/klaytn.svg",
  250: url + "/chains/fantom.svg",
  100: url + "/chains/gnosis.svg",
  11155111: url + "/chains/ethereum.svg",
  168587773: url + "/chains/blast.svg",
};
