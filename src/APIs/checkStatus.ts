import axios from 'axios';

export async function statusApi(apiKey : string): Promise<boolean> {

  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/ping',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey}
  };

  try {
    const res = await axios.request(options);
    console.log('Response:', res.data);
    return true;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}
