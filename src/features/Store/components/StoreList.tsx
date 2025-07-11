import useProductsStore from "../zustand-store/zustand-store";
import StoreCard from "./StoreCard";

function StoreList() {
    const { products } = useProductsStore();

    return (
        <>
            <div className="store-list-cards-wrapper">
                    {
                        products.map((product, index) => (
                            <StoreCard key={`store-card-${product.id}`} productInfo={product}/>
                        ))
                    }
            </div> 
        </>
    );
}

export default StoreList;