import { Menu } from "../menus";
import RestApiEndpoints from "./endpoints";

export async function deleteData(page: Menu, key: string): Promise<any> {
  try {
    console.log('Data to be deleted:', key);

    const response = await fetch(`${RestApiEndpoints.URL}/${page.path}/${key}`, {
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
