import { useEffect } from 'react';
import StoreList from './components/StoreList';
import './styles/index.scss'
import StoreHeader from './components/StoreHeader';
import Cart from './components/Cart';
import { useProductsStore } from './jotai-store/products-store';
import { Showing, useShowingStore } from './jotai-store/showing-store';

function Store() {
    const { fetchProducts } = useProductsStore();
    const { showingState } = useShowingStore();
    
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