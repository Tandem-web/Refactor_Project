import useProductsStore from "../../zustand-store/products-store";
import { useShallow } from 'zustand/react/shallow';
import StoreCard from "./components/StoreCard";
import StoreCardLoader from "./components/StoreCardLoader";
import useShowindStore, { Showing } from "../../zustand-store/showing-store";
import useFavoriteStore from "../../zustand-store/favorite-store";

function StoreList() {
    const { products, loading} = useProductsStore(
        useShallow((state) => ({products: state.products, loading: state.loading}))
    );
    const favoriteIds = useFavoriteStore((state) => state.favoriteIds);
    const showingState = useShowindStore((state) => state.showingState);
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