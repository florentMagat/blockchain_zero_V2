import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {statusApi} from './APIs/checkStatus';
import { listCoinsApi } from './APIs/listCoins';

import CoinCard from './Composants/CoinCard';
import Sidebar from './Composants/SideBar';

function App() {
  const apiKey : string = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [coins, setCoins] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkApiStatus = async () => {
      const apiStatus: boolean = await statusApi(apiKey);
      if (apiStatus === false) {
        console.log('API is down');
        navigate('/error');
      } else {
        try {
          const data = await listCoinsApi(apiKey);
          setCoins(data);
        } catch (err) {
          setError('Failed to fetch coins');
        }
      }
    };
    checkApiStatus();
  }, [apiKey, navigate]);

  console.log(coins)

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
      <div className='w-[20vw]'>
        <Sidebar />
      </div>   
      <div className="flex flex-col justify-center items-center">
        {error && <p className="text-red-500">{error}</p>}
        {coins && (
          <div className="overflow-y-auto max-h-screen w-full px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {Array.isArray(coins) && coins.map((coin) => (
                <CoinCard key={coin.id} coin={coin} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
