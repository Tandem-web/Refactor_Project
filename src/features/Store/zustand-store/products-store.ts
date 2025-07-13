import {create} from 'zustand';
import { Product, Products, ProductApi, ProductsBusket } from '../model/types';
import { get_all_products } from '../api/api';

interface ProductState{
    products: Products;
    loading: boolean;
    error: string | null;
    info: {
      amountFavorites: number;
      amountInCart: number;
    }
    showFavorite: boolean;
    cart: ProductsBusket;
    updateInfo: () => void;
    fetchProducts: () => Promise<void>;
    toggleToFavorite: (productId: Product["id"]) => void;
    toggleShowFavorite: () => void;
    addToCart: (productId: Product["id"]) => void;
}

const useProductsStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  info: {
    amountFavorites: 0,
    amountInCart: 0, 
  },
  showFavorite: false,
  cart: [],
  
  addToCart: (productId) => {
    const products = get().products.map(product => {
      return product.id === productId ? {...product, inCart: true} : product;
    })
    set({products});

    const cart = get().cart;
    const product = get().products.find(item => item.id === productId);

    if(!cart.find(item => item.info.id === productId)){
      cart.push({
        info: product,
        amount: 0,
      })
    }

    set({cart});
  },

  updateInfo: () => {
    const products = get().products
    const amountFavorites = products.filter(product => product.isFavorite).length;
    const amountInCart = products.filter(product => product.inCart).length;

    set({info: {amountFavorites, amountInCart}});
  },

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

  toggleToFavorite: (productId) => {
    const products = get().products.map(product => {
      return product.id === productId ? {...product, isFavorite: !product.isFavorite} : product;
    })
    set({products});
  },

  toggleShowFavorite: () => {
    set({showFavorite: !get().showFavorite});
  }
}));

export default useProductsStore;