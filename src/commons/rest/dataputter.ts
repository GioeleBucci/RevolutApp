import Endpoints, { URL } from "./endpoints";

export async function putData(endpoint: Endpoints, key: string, newData: any): Promise<any> {
  try {
    const response = await fetch(`${URL}/${endpoint}/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}
