import CartContent from "./components/CartContent";
import CartSidebar from "./components/CartSidebar";

function Cart() {
    return (
        <>
            <div className="cart-container">
                <CartContent/>
                <CartSidebar/>
            </div>
        </>
    );
}

export default Cart;