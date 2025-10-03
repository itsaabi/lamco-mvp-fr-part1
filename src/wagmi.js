import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Real Estate Dapp",
  projectId: "6832ca71a528b5b043547686aa067869",
  chains: [mainnet, polygon, optimism, arbitrum],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
});
