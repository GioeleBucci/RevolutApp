import Endpoints, { URL } from "./endpoints";

export async function postData(endpoint: Endpoints, data: any): Promise<any> {
  try {
    console.log('Data to be posted:', data);

    const response = await fetch(`${URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}