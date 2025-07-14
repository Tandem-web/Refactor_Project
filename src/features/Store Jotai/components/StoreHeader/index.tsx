import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useFavoriteStore } from "../../jotai-store/favorite-store";
import { useCartStore } from "../../jotai-store/cart-store";
import { Showing, useShowingStore } from "../../jotai-store/showing-store";

function StoreHeader() {
    const { favoriteIds } = useFavoriteStore();
    const { cartItems } = useCartStore();
    const { showingState, changeShowingState } = useShowingStore();


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