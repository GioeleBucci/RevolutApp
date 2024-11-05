import { Menu } from "../menus";
import RestApiEndpoints from "./endpoints";

export async function postData(page: Menu, data: any): Promise<any> {
  try {
    console.log('Data to be posted:', data);

    const response = await fetch(`${RestApiEndpoints.URL}/${page.path}`, {
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