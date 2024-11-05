import Endpoints, { URL } from "./endpoints";

export async function fetchData(endpoint: Endpoints, setItems: (items: any) => void): Promise<void> {
  try {
    const response = await fetch(`${URL}/${endpoint}`);

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
