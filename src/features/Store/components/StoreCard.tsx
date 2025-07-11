import {FaCartShopping, FaHeart } from "react-icons/fa6";
import { Product } from "../model/types";

interface StoreCardProps{
    productInfo: Product;
    key: string;
}

const StoreCard: React.FC<StoreCardProps> = (props) => {
    const {productInfo} = props;
    return (
        <>
            <div className="card-wrapper">
                <div className="card-top-wrapper">
                    <button className="card-app-to-favorite"><FaHeart/></button>
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
                    <button className="card-button-add-to-basket"><FaCartShopping/> Купить</button>
                </div>
            </div>
        </>
    );
}

export default StoreCard;