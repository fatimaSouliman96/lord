


export async function getData(url: string, id?: number) {
    try {
        const res = await fetch(`https://api-test.leoron.eu/api/${url}${id !== undefined ? "/" + id : ""}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
};