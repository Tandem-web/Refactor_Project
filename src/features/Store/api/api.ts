const __API_URL__ = 'https://fakestoreapi.com/';

export const get_all_products = async () => {
    const response = await fetch(__API_URL__ + `products`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка выхода из системы');
    }
    console.log(response.json())
    return await response.json();
}