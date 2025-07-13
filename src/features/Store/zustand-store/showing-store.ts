import {create} from 'zustand';

export enum Showing{
    FAVORITE = 'favorite',
    PRODUCTS = 'products',
    CART = 'cart'
}

interface ShowingState{
    showingState: Showing;
    changeShowingState: (newState: Showing) => void;
}

const useShowindStore = create<ShowingState>((set, get) => ({
    showingState: Showing.PRODUCTS,

    changeShowingState: (newState) => {
        set({showingState: newState})
    },
}));

export default useShowindStore;