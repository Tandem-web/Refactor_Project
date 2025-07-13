import {create} from 'zustand';
import { Product, ProductBusket, ProductsBusket } from '../model/types';
import useProductsStore from './products-store';

interface CartState{
    cartItems: ProductsBusket;
    cartInfo: {
        totalPrice: number;
    }
    addToCart: (productId: Product["id"]) => void;
    removeFromCart: (productId: Product["id"]) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    setQuantity: (productId: number, quantity: number) => void;
    updateInfo: () => void;

}

const useCartStore = create<CartState>((set, get) => ({
    cartItems: [],
    
    cartInfo: {
        totalPrice: 0,
    },

    updateInfo: () => {
        const productsInCart = get().cartItems;
        const totalPrice = productsInCart.reduce((acc:number, product:ProductBusket) => acc + product.amount * product.info.price, 0);
        set({cartInfo: {
                ...get().cartInfo,
                totalPrice: totalPrice
            }
        })
    },

    addToCart: (productId) => {
        const products = useProductsStore.getState().products;
        const productsInCart = get().cartItems;

        if(!productsInCart.find(product => product.info.id === productId)){
            set({
                cartItems: [
                    ...productsInCart,
                    {
                        info: products.find(product => product.id === productId),
                        amount: 1,
                    }
                ]
            })
        }
    },
    removeFromCart: (productId) => {
        const productsInCart = get().cartItems;

        set({cartItems: productsInCart.filter(product => product.info.id != productId)});
    },
    increaseQuantity: (productId) => {
        const productsInCart = get().cartItems;
        
        set({cartItems: productsInCart.map(item => 
            item.info.id === productId ? {
                ...item,
                amount: ++item.amount > 99 ? 99 : item.amount, 
            } : item
        )})
    },
    decreaseQuantity: (productId) => {
        const productsInCart = get().cartItems;
        
        set({cartItems: productsInCart.map(item => 
            item.info.id === productId ? {
                ...item,
                amount: --item.amount < 1 ? 1 : item.amount, 
            } : item
        )})
    },
    setQuantity: (productId, quantity) => {
        const productsInCart = get().cartItems;
        
        if(quantity < 1){
            quantity = 1
        }
        if(quantity > 99){
            quantity = 99;
        }

        set({cartItems: productsInCart.map(item => 
            item.info.id === productId ? {
                ...item,
                amount: quantity, 
            } : item
        )})    }
}));

export default useCartStore;