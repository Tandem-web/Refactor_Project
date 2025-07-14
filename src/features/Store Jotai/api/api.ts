import { ProductsApi } from "../model/types";

  
export const get_all_products = async ():Promise<ProductsApi> => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка получения пользователя');
    }

    return await response.json();
}