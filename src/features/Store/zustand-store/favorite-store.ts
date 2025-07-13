import {create} from 'zustand';
import { Product} from '../model/types';

interface FavoriteState{
    favoriteIds: Product["id"][];
    toggleToFavorite: (productId: Product["id"]) => void;
}

const useFavoriteStore = create<FavoriteState>((set, get) => ({
    favoriteIds: [],
    toggleToFavorite: (productId) => {
        const currentIds = get().favoriteIds;
        const isFavorite = currentIds.includes(productId);
        
        set({
            favoriteIds: isFavorite
                ? currentIds.filter(id => id !== productId)
                : [...currentIds, productId]
        });
    },
}));

export default useFavoriteStore;