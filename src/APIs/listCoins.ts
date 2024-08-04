import axios from 'axios';

export async function listCoinsApi(apiKey : string): Promise<object> {

  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: 1,
        sparkline: false
    },
    headers: {
      accept: 'application/json', 
      'x-cg-demo-api-key': apiKey
    }
  };

  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error : unknown) {
    return {error: error};
  }
}
