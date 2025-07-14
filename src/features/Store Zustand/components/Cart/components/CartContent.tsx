import { useEffect } from "react";
import useCartStore from "../../../zustand-store/cart-store";
import CartItem from "./CartItem";

const texts = ['товар', 'товара', 'товаров'];
const sklonenie = (number:number, txt: string[], cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

function CartContent() {
    const cartItems = useCartStore((state) => state.cartItems);
    const updateInfo = useCartStore((state) => state.updateInfo);

    useEffect(() => {
        updateInfo();
    },[cartItems])

    return (
        <>
            <div className="cart-container-content">
                <div className="cart-content-header">
                    <h1>Корзина</h1>
                </div>
                <div className="cart-list">
                    {
                        cartItems.length > 0 ? (
                            <>
                                <div>
                                    <span className="cart-list-info">{`${cartItems.length} ${sklonenie(cartItems.length, texts)}`}</span>
                                </div>
                                {
                                    cartItems.map((item, index) => (
                                        <CartItem key={`cart-item-${item.info.id}`} product={item}/>
                                    ))
                                }
                            </>
                        ) : (
                            <div>
                                <span className="cart-list-info">Нет товаров</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default CartContent;