import {FaCartShopping, FaHeart } from "react-icons/fa6";
import { Product } from "../../../model/types";
import useProductsStore from "../../../zustand-store/products-store";
import useFavoriteStore from "../../../zustand-store/favorite-store";
import useCartStore from "../../../zustand-store/cart-store";
import { useShallow } from "zustand/react/shallow";
import useShowindStore, { Showing } from "../../../zustand-store/showing-store";

interface StoreCardProps{
    productInfo: Product;
    key: string;
}

const StoreCard: React.FC<StoreCardProps> = (props) => {
    const favoriteIds = useFavoriteStore((state) => state.favoriteIds)
    const toggleToFavorite = useFavoriteStore((state) => state.toggleToFavorite);

    const {cartItems, addToCart} = useCartStore(
        useShallow((state) => (
            {cartItems: state.cartItems, addToCart: state.addToCart}
        ))
    )

    const changeShowingState = useShowindStore((state) => state.changeShowingState);

    const {productInfo} = props;

    const inFavorite = favoriteIds.includes(productInfo.id);
    const inCart = cartItems.find(product => product.info.id === productInfo.id) ? true : false;

    return (
        <>
            <div className="card-wrapper">
                <div className="card-top-wrapper">
                    <button className={`card-app-to-favorite ${inFavorite ? 'favorite' : ''}`} onClick={() => toggleToFavorite(productInfo.id)}><FaHeart/></button>
                    <div className="card-thumbnail-wrap">
                        <img width="516" height="688" className="card-thumbnail"src={productInfo.images[0]} alt={productInfo.title} />
                    </div>
                </div>
                <div className="card-middle-wrapper">
                    <div className="card-price-wrap">
                        <span className="card-price">${productInfo.price}</span>
                    </div>
                    <div className="card-product-name-wrap">
                        <span className="card-product-category">{productInfo.category.name}</span>
                        <span className="card-product-name">
                            <span className="card-product-name-separator"> / </span>
                            {productInfo.title}
                        </span>
                    </div>
                </div>
                <div className="card-bottom-wrapper">
                    {
                        inCart ? (
                            <button 
                                className={`card-button-add-to-basket card-button-in-busket`}
                                onClick={() => changeShowingState(Showing.CART)}>
                                В корзине
                            </button>
                        ) : (
                            <button 
                                className={`card-button-add-to-basket`}
                                onClick={() => addToCart(productInfo.id)}>
                                <FaCartShopping/>Купить
                            </button> 
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default StoreCard;