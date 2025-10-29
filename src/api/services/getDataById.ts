
export async function getDataById(url: string, id: number) {
    try {
        const res = await fetch(`https://api-test.leoron.eu/api/${url}/${id}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error(error);
    }
};