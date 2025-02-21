const fetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Request Error:', error);
    }
};

const processData = (data: any): void => {
    if (!data) {
        console.log('There is no data');
        return;
    }

    console.log('Received data:', data);

    if (Array.isArray(data)) {
        console.log('Array length:', data.length);
    } else {
        console.log('This is not an array:', Object.keys(data));
    }
};

const main = async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/users');
    processData(data);
};

main();
