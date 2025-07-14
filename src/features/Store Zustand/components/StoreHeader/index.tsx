import { FaCartShopping, FaHeart } from "react-icons/fa6";
import useProductsStore from "../../zustand-store/products-store";
import { useShallow } from "zustand/react/shallow";
import useFavoriteStore from "../../zustand-store/favorite-store";
import useShowindStore, { Showing } from "../../zustand-store/showing-store";
import useCartStore from "../../zustand-store/cart-store";

function StoreHeader() {
    const favoriteIds = useFavoriteStore((state) => state.favoriteIds);
    const cartItems = useCartStore((state) => state.cartItems);
    const showingState = useShowindStore((state) => state.showingState);
    const changeShowingState = useShowindStore((state) => state.changeShowingState);

    return (
        <>
            <div className="store-header-container">
                <div className="store-header-button-wrapper">
                    <button 
                        className="store-header-button button-with-amount" 
                        onClick={
                            () => {
                                showingState === Showing.FAVORITE ? changeShowingState(Showing.PRODUCTS) : changeShowingState(Showing.FAVORITE)
                            }
                        }
                    >
                        <div className="amount-favorite-items">{favoriteIds.length}</div>
                        <FaHeart/>
                    </button>
                </div>
                <div className="store-header-button-wrapper">
                    <button 
                        className="store-header-button button-with-amount"
                        onClick={
                            () => {
                                showingState === Showing.CART ? changeShowingState(Showing.PRODUCTS) : changeShowingState(Showing.CART)
                            }
                        }
                    >
                        <div className="amount-favorite-items">{cartItems.length}</div>
                        <FaCartShopping/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default StoreHeader;