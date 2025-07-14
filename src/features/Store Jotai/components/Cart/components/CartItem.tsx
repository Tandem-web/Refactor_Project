import { FaHeart, FaMinus, FaPlus, FaTrash, FaWallet } from "react-icons/fa6";
import { ProductBusket } from "../../../model/types";
import { useEffect, useState } from "react";
import { useFavoriteStore } from "../../../jotai-store/favorite-store";
import { useCartStore } from "../../../jotai-store/cart-store";

interface CartItemProps{
    product: ProductBusket;
    key: string;
}

const CartItem:React.FC<CartItemProps> = (props) => {
    const { favoriteIds, toggleToFavorite } = useFavoriteStore();
    const { removeFromCart, decreaseQuantity, increaseQuantity, setQuantity } = useCartStore();

    const { product } = props;

    const [localAmount, setLocalAmount] = useState(product.amount); 
    
    useEffect(() => {
        setLocalAmount(product.amount);
    }, [product.amount]);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setQuantity(product.info.id, newValue);
        setLocalAmount(newValue);
    };

    
    const inFavorite = favoriteIds.includes(product.info.id);
    return (
        <>
            <div className="cart-item-container">
                <div className="cart-item__wrap">
                    <div className="cart-item__good">
                        <img src={product.info.images[0]} width="98" height="98" alt={product.info.title} className="cart-item__good-img"/>
                        <div className="cart-item__good-info">
                            <div className="cart-item__good-info-name">{product.info.title}</div>
                            <div className="cart-item__good-info-category">{product.info.category.name}</div>
                            <div className="cart-item__btns-wrap">
                                <button className={`cart-item__btn ${inFavorite ? 'favorite' : ''}`} onClick={() => toggleToFavorite(product.info.id)}>
                                    <FaHeart/>
                                </button>
                                <button className="cart-item__btn" onClick={() => removeFromCart(product.info.id)}>
                                    <FaTrash/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__count">
                        <button type="button" className="cart-item__count-button" aria-label="Уменьшить количество" onClick={() => decreaseQuantity(product.info.id)}>
                            <FaMinus/>
                        </button>
                        <input  type="number"  
                                autoComplete="off" 
                                maxLength={2} 
                                value={localAmount} 
                                min="1" 
                                max="99" 
                                onChange={(e) => setLocalAmount(Number(e.target.value))}
                                onBlur={handleBlur}
                                className="cart-item__count-input"
                        >
                        </input>
                        <button type="button" className="cart-item__count-button" aria-label="Увеличить количество" onClick={() => increaseQuantity(product.info.id)}>
                            <FaPlus/>
                        </button>
                    </div>
                    <div className="cart-item__price">
                        <span className="cart-item__price-text"><FaWallet/>$ {product.info.price * product.amount}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;