import { Menu } from "../menus";
import RestApiEndpoints from "./endpoints";

export async function putData(page: Menu, key: string, newData: any): Promise<any> {
  try {
    console.log('Data to be updated:', newData);

    const response = await fetch(`${RestApiEndpoints.URL}/${page.path}/${key}`, {
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
