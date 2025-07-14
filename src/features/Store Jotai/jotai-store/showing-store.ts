import { atom, useAtom } from 'jotai';

export enum Showing{
    FAVORITE = 'favorite',
    PRODUCTS = 'products',
    CART = 'cart'
}

const showingStateAtom = atom<Showing>(Showing.PRODUCTS);

const changeShowingStateAtom = atom(
    null,
    (get, set, newState: Showing) => {
        set(showingStateAtom, newState);
    }
)

export const useShowingStore = () => {
    const [showingState] = useAtom(showingStateAtom);
    const [_, changeShowingState] = useAtom(changeShowingStateAtom);

    return {
        showingState,
        changeShowingState
    }
} 