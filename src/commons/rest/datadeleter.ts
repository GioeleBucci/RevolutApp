import Endpoints, { URL } from "./endpoints";

export async function deleteData(endpoint: Endpoints, key: string): Promise<any> {
  try {
    const response = await fetch(`${URL}/${endpoint}/${key}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}
