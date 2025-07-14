import { atom, useAtom } from "jotai";
import { Product, ProductBusket, ProductsBusket } from "../model/types";
import { useProductsStore } from "./products-store";

type cartInfo = {
    totalPrice: number;
}

const initialCartInfo:cartInfo = {
    totalPrice: 0,
}

const cartItemsAtom = atom<ProductsBusket>([]);
const cartInfoAtom = atom<cartInfo>(initialCartInfo);

const updateInfoAtom = atom(null, (get, set) => {
  const productsInCart = get(cartItemsAtom);
  const totalPrice = productsInCart.reduce((acc: number, product: ProductBusket) => 
    acc + product.amount * product.info.price, 0);
  
  set(cartInfoAtom, { totalPrice });
});

export const useCartStore = () => {
    const { products } = useProductsStore();
    const [cartItems, setCartItems] = useAtom(cartItemsAtom);
    const [cartInfo] = useAtom(cartInfoAtom);
    const [_, updateInfo] = useAtom(updateInfoAtom);


    /* -------------------------------------------------------------------------- */
    /*                         Добавления товара в корзину                        */
    /* -------------------------------------------------------------------------- */
    const addToCart = (productId: Product["id"]) => {
        const productsStore = products;
        const productsInCart = cartItems;

        if (!productsInCart.find(product => product.info.id === productId)) {
            const product = productsStore.find(product => product.id === productId);
            
            if (product) {
                setCartItems([...productsInCart, { info: product, amount: 1 }]);
                updateInfo();
            }
        }
    };
    /* -------------------------------------------------------------------------- */
    /*                         Удаление товара из корзины                         */
    /* -------------------------------------------------------------------------- */
    const removeFromCart = (productId: Product["id"]) => {
        setCartItems(cartItems.filter(product => product.info.id !== productId));
        updateInfo();
    };


    /* -------------------------------------------------------------------------- */
    /*                          Увеличение значения на 1                          */
    /* -------------------------------------------------------------------------- */
    const increaseQuantity = (productId: number) => {
        setCartItems(cartItems.map(item => 
        item.info.id === productId ? { 
            ...item, 
            amount: Math.min(item.amount + 1, 99) 
        } : item
        ));
        updateInfo();
    };

    /* -------------------------------------------------------------------------- */
    /*                          Уменьшение значения на 1                          */
    /* -------------------------------------------------------------------------- */
    const decreaseQuantity = (productId: number) => {
        setCartItems(cartItems.map(item => 
            item.info.id === productId ? { 
                ...item, 
                amount: Math.max(item.amount - 1, 1) 
            } : item
        ));
        updateInfo();
    };

    /* -------------------------------------------------------------------------- */
    /*                             Установка значения                             */
    /* -------------------------------------------------------------------------- */
    const setQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) quantity = 1;
        if (quantity > 99) quantity = 99;

        setCartItems(cartItems.map(item => 
            item.info.id === productId ? { 
                ...item, 
                amount: quantity 
            } : item
        ));
        updateInfo();
    };


    return {
        cartItems,
        cartInfo,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        setQuantity
    }
}