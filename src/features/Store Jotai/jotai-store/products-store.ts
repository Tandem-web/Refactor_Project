import { atom, useAtom } from "jotai"
import { Product, Products } from "../model/types";
import { get_all_products } from "../api/api";

const productAtom = atom<Products>([]);
const loadingAtom = atom<boolean>(false);
const errorAtom = atom<string | false>(false);

const fetchProductsAtom = atom(null, async (get, set) => {
    set(loadingAtom, true);
    set(errorAtom, false);

    try{
        const data = await get_all_products();
        const products: Products = data.map((product: Product) => ({
            ...product,
            isFavorite: false,
            inCart: false,
        }));

        set(productAtom, products);
        set(loadingAtom, false);

    } catch(error){
        set(errorAtom, error instanceof Error ? error.message : 'Unknown error');
        set(loadingAtom, false);
    }

}) 

export const useProductsStore = () => {
    const [products] = useAtom(productAtom);
    const [loading] = useAtom(loadingAtom);
    const [error] = useAtom(errorAtom);
    const [_, fetchProducts] = useAtom(fetchProductsAtom);

    return {
        products,
        loading,
        error,
        fetchProducts
    }
} 