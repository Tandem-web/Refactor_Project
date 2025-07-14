import { useFavoriteStore } from "../../jotai-store/favorite-store";
import { useProductsStore } from "../../jotai-store/products-store";
import { Showing, useShowingStore } from "../../jotai-store/showing-store";
import StoreCard from "./components/StoreCard";
import StoreCardLoader from "./components/StoreCardLoader";

function StoreList() {
    const { products, loading } = useProductsStore();
    const { favoriteIds } = useFavoriteStore();
    const { showingState } = useShowingStore();

    return (
        <>
            <div className="store-list-cards-wrapper">
                {
                    loading ? (
                        <>
                            {
                                new Array(10).fill(null).map((_, index) => (
                                    <StoreCardLoader key={`store-card-loader-${index}`}/>
                                ))
                            }
                        </>
                    ): (
                        <>
                            {
                                showingState === Showing.FAVORITE ? (
                                  products.filter(product => favoriteIds.includes(product.id) ).map((product) => (
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