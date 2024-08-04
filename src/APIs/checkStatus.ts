import axios from 'axios';

export async function statusApi(apiKey : string): Promise<boolean> {

  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/ping',
    headers: {
      accept: 'application/json', 
      'x-cg-demo-api-key': apiKey
    }
  };

  try {
    await axios.request(options);
    return true;
  } catch (error) {
    return false;
  }
}
