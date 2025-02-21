const fetchData = (url: string): Promise<any> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    });
};


const processData = (data: any): void => {
  console.log("Received data:", data);

  if (Array.isArray(data)) {
    console.log("Array length:", data.length);
  } else {
    console.log("This is not an array. There is keys:", Object.keys(data));
  }
};


fetchData("https://jsonplaceholder.typicode.com/users")
  .then(data => processData(data))
  .catch(error => console.error("Request error:", error));
