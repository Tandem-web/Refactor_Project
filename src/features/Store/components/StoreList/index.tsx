import useProductsStore from "../../zustand-store/products-store";
import { useShallow } from 'zustand/react/shallow';
import StoreCard from "./StoreCard";
import StoreCardLoader from "./StoreCardLoader";

function StoreList() {
    const { products, loading, showFavorite } = useProductsStore(
        useShallow((state) => ({products: state.products, loading: state.loading, showFavorite: state.showFavorite}))
    );
    return (
        <>
            <div className="store-list-cards-wrapper">
                {
                    loading ? (
                        <>
                            {
                                new Array(10).fill(1).map((_, index) => (
                                    <StoreCardLoader key={`store-card-loader-${index}`}/>
                                ))
                            }
                        </>
                    ): (
                        <>
                            {
                                showFavorite ? (
                                  products.filter(product => product.isFavorite).map((product) => (
                                    <StoreCard key={`store-card-${product.id}`} productInfo={product}/>
                                  ))
                                ) : (
                                    <>
                                        {
                                            products.map((product) => (
                                                <StoreCard key={`store-card-${product.id}`} productInfo={product}/>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </>
                    )
                }

            </div> 
        </>
    );
}

export default StoreList;