import { useEffect } from 'react';
import StoreList from './components/StoreList';
import runSomeCode from './someEdu';
import './styles/index.scss'
import useProductsStore from './zustand-store/zustand-store';

function Store() {
    const {fetchProducts} = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <>
            <StoreList/>
        </>
    );
}

export default Store;