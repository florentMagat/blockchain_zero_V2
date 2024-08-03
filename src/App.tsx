import {useEffect} from 'react';
import {statusApi} from './APIs/checkStatus.ts';

function App() {
  const apiKey : string = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const checkApiStatus = async () => {
      
      const apiStatus : boolean = await statusApi(apiKey);
      if (apiStatus === false) {
        console.log('API is down');
      } else {
        console.log('API is up');
      }
    };
    checkApiStatus();
  }, []);

  return (
    <>
      <h1 className="text-xl flex-row justify-center">blockchain_zero_v2</h1>
    </>
  )
}

export default App;
