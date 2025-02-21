
const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error for request to url: ${url}:`, error);
    return null;
  }
};


const main = async () => {
  const invalidUrl = "https://invalid-api-url.com/data";
  const backupUrl = "https://jsonplaceholder.typicode.com/users";

  let data = await fetchData(invalidUrl);

  if (!data) {
    console.log(`Re-rooting for backup url: ${backupUrl}`);
    data = await fetchData(backupUrl);
  }

  if (!data) {
    throw new Error("Both urls are unavailable ");
  }

  console.log("Received data:", data);
};


main().catch(error => console.error("Critical error", error));
