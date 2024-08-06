import axios from 'axios';

export async function statusApi(apiKey : string): Promise<boolean> {

  const options = {
    method: 'GET',
    url: '/api/ping',
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
