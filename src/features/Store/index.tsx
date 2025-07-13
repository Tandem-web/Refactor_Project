import { useEffect } from 'react';
import StoreList from './components/StoreList';
import runSomeCode from './someEdu';
import './styles/index.scss'
import useProductsStore from './zustand-store/products-store';
import StoreHeader from './components/StoreHeader';
import useShowindStore, { Showing } from './zustand-store/showing-store';
import Cart from './components/Cart';

function Store() {
    const fetchProducts = useProductsStore((state) => state.fetchProducts);
    const products = useProductsStore((state) => state.products);
    const showingState = useShowindStore((state) => state.showingState);
    
    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <>
            <StoreHeader/>
            {
                showingState === Showing.CART ? (
                    <Cart/>
                ) : (
                    <StoreList/>
                )
            }
            
            
        </>
    );
}

export default Store;