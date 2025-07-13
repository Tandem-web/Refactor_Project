import {create} from 'zustand';
import { Product, Products} from '../model/types';
import { get_all_products } from '../api/api';

interface ProductState{
    products: Products;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

const useProductsStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null }); 
    try {
      const data = await get_all_products();
      const products:Products = [];

      data.forEach((product:Product) => {
          products.push({
              ...product,
              isFavorite: false,
              inCart: false,
          });
      });

      set({ products: products, loading: false });
    } catch (error) {
      set({ error: error, loading: false });
    }
  },

}));

export default useProductsStore;