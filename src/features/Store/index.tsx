import { useEffect } from 'react';
import StoreList from './components/StoreList';
import runSomeCode from './someEdu';
import './styles/index.scss'
import useProductsStore from './zustand-store/products-store';
import StoreHeader from './components/StoreHeader';

function Store() {
    const fetchProducts = useProductsStore((state) => state.fetchProducts);
    const products = useProductsStore((state) => state.products);
    const updateInfo = useProductsStore((state) => state.updateInfo);
    
    useEffect(() => {
        updateInfo()
    }, [products])

    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <>
            <StoreHeader/>
            <StoreList/>
        </>
    );
}

export default Store;