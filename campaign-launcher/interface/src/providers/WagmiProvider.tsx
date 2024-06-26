import { FC, PropsWithChildren } from 'react';
import { http, createConfig, WagmiProvider as WWagmiProvider } from 'wagmi';
import {
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  mainnet,
  moonbaseAlpha,
  moonbeam,
  polygon,
  polygonMumbai,
  sepolia,
  skaleHumanProtocol,
} from 'wagmi/chains';
// import { walletConnect } from 'wagmi/connectors';

// const walletConnectProjectId = import.meta.env
//   .VITE_APP_WALLETCONNECT_PROJECT_ID;

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [
    mainnet,
    sepolia,
    bsc,
    bscTestnet,
    polygon,
    polygonMumbai,
    moonbeam,
    moonbaseAlpha,
    avalanche,
    avalancheFuji,
    skaleHumanProtocol,
  ],
  // connectors: [walletConnect({ projectId: walletConnectProjectId })],
  connectors: [],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
    [polygon.id]: http(),
    [polygonMumbai.id]: http(),
    [moonbeam.id]: http(),
    [moonbaseAlpha.id]: http(),
    [avalanche.id]: http(),
    [avalancheFuji.id]: http(),
    [skaleHumanProtocol.id]: http(),
  },
});

export const WagmiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <WWagmiProvider config={config}>{children}</WWagmiProvider>;
};
