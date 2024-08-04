import React from 'react';

interface CoinCardProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
  };
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <div className="border p-4 rounded shadow-md m-2">
      <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-2" />
      <h2 className="text-lg font-bold">{coin.name}</h2>
      <p className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</p>
      <p className="text-sm">Price: ${coin.current_price}</p>
      <p className="text-sm">Market Cap: ${coin.market_cap}</p>
    </div>
  );
};

export default CoinCard;