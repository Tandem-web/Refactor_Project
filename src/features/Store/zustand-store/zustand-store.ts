import {create} from 'zustand';
import { Products } from '../model/types';
import { get_all_products } from '../api/api';

interface ProductState{
    products: Products;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
}

const useProductsStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true, error: null }); 
    try {
      const data = await get_all_products();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: error, loading: false });
    }
  },
}));

export default useProductsStore;