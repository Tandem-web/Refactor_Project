import { useCartStore } from "../../../jotai-store/cart-store";

function CartSidebar() {
    const { cartInfo } = useCartStore();
    return (
        <>
            <div className="cart-container-sidebar">
                <div className="cart-order">
                    <div className="cart-order__total">
                        <span>Итого</span>
                        <span>$ {cartInfo.totalPrice}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSidebar;