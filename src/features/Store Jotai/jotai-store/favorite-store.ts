import { atom, useAtom } from "jotai";
import { Product } from "../model/types";




const favoriteIdsAtom = atom<Product["id"][]>([]);
const toggleToFavoriteAtom = atom(
    null,
    (get, set, productId: Product["id"]) => {
        const currentIds = get(favoriteIdsAtom);
        const isFavorite = currentIds.includes(productId);

        set(
            favoriteIdsAtom,
            isFavorite ? 
                currentIds.filter((id) => id !== productId) :
                [...currentIds, productId]
        )
    }
)

export const useFavoriteStore = () => {
    const [favoriteIds] = useAtom(favoriteIdsAtom);
    const [_, toggleToFavorite] = useAtom(toggleToFavoriteAtom);

    return {
        favoriteIds,
        toggleToFavorite
    }
}