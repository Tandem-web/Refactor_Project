import {FaCartShopping, FaHeart } from "react-icons/fa6";
import { Product } from "../../../model/types";

interface StoreCardLoaderProps{
    key: string;
}

const StoreCardLoader: React.FC<StoreCardLoaderProps> = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-top-wrapper">
                    <button className="card-app-to-favorite card-app-to-favorite-loader"><FaHeart/></button>
                    <div className="card-thumbnail-wrap card-thumbnail-loader">
                        
                    </div>
                </div>
                <div className="card-middle-wrapper">
                    <div className="card-price-wrap">
                        <span className="card-price"></span>
                    </div>
                    <div className="card-product-name-wrap">
                        <span className="card-product-category card-product-category-loader"></span>
                        <span className="card-product-name card-product-name-loader">
                            <span className="card-product-name-separator"> / </span>
                            <span className="card-product-name-span"></span>
                        </span>
                    </div>
                </div>
                <div className="card-bottom-wrapper">
                    <button className="card-button-add-to-basket card-button-add-to-basket-loader"><FaCartShopping/></button>
                </div>
            </div>
        </>
    );
}

export default StoreCardLoader;