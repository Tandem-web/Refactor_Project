import useCartStore from "../../../zustand-store/cart-store";

function CartSidebar() {
    const totalPrice = useCartStore((state) => state.cartInfo.totalPrice);
    return (
        <>
            <div className="cart-container-sidebar">
                <div className="cart-order">
                    <div className="cart-order__total">
                        <span>Итого</span>
                        <span>$ {totalPrice}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSidebar;