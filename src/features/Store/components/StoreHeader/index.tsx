import { FaCartShopping, FaHeart } from "react-icons/fa6";
import useProductsStore from "../../zustand-store/products-store";
import { useShallow } from "zustand/react/shallow";

function StoreHeader() {
    const {amountFavorites, amountInCart} = useProductsStore(
        useShallow((state)=> (
            {
                amountFavorites: state.info.amountFavorites,
                amountInCart: state.info.amountInCart
            }
        ))
    )
    const toggleShowFavorite = useProductsStore((state) => state.toggleShowFavorite);
    return (
        <>
            <div className="store-header-container">
                <div className="store-header-button-wrapper">
                    <button className="store-header-button button-with-amount" onClick={() => toggleShowFavorite()}>
                        <div className="amount-favorite-items">{amountFavorites}</div>
                        <FaHeart/>
                    </button>
                </div>
                <div className="store-header-button-wrapper">
                    <button className="store-header-button button-with-amount" onClick={null}>
                        <div className="amount-favorite-items">{amountInCart}</div>
                        <FaCartShopping/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default StoreHeader;