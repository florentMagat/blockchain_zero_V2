import React from 'react';

interface CoinCardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
  };
}

const formatToMillions = (num: number): string => {
  return Math.trunc((num / 1000000)).toLocaleString() + ' M$';
};

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <div className="border p-4 rounded shadow-md m-2 bg-sky-950">
      <div className="flex items-center justify-between">
        <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-5 mr-5" />
        <div className="mb-5 mr-5">
          <p>{coin.market_cap_rank}.<span className="pl-3 text-sm text-gray-300">{coin.symbol.toUpperCase()}</span></p>
          <h2 className="text-base font-bold">{coin.name}</h2>
        </div>
      </div>
      <p className="text-sm mb-2">Prix : {coin.current_price.toLocaleString()} $</p>
      <p className="text-sm mb-2">Capitalisation : {formatToMillions(coin.market_cap)}</p>
    </div>
  );
};

export default CoinCard;