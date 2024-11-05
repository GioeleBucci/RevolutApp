import { Menu } from '../menus';
import RestApiEndpoints from './endpoints';

export async function fetchData(menu: Menu, setItems: (items: any) => void): Promise<void> {
  try {
    const response = await fetch(`${RestApiEndpoints.URL}/${menu.path}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    setItems(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
