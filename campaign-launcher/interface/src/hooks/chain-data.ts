import { ChainId, NETWORKS } from '@human-protocol/sdk';

import { useEffect, useState } from 'react';
import { Address } from 'viem';
import { useAccount, useBalance, useChainId } from 'wagmi';

export const useHMTPrice = () => {
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    if (!price) {
      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=human-protocol&vs_currencies=usd`
      )
        .then((res) => res.json())
        .then((json) => setPrice(json['human-protocol'].usd))
        .catch((err) => {
          console.error(err);
          setPrice(0);
        });
    }
  }, []);

  return price;
};

export const useWalletBalance = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data: balance } = useBalance({
    address,
    chainId,
    token: NETWORKS[chainId as ChainId]?.hmtAddress as Address,
  });
  const price = useHMTPrice();

  return { ...balance, usdPrice: price };
};
