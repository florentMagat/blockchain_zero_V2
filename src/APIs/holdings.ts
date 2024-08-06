import axios from 'axios';

export async function holdingsApi(apiKey : string): Promise<object> {


  const options = {
    method: 'GET',
    url: '/api/companies/public_treasury/bitcoin',
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