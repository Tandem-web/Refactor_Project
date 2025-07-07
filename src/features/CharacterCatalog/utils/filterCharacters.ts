import { Character, Characters } from "../types/characters";

export default function filterCharacters(data:Characters, searchQuery = '') {
    if(!data){
        return [];
    }

    const query = searchQuery.toLowerCase().trim(); 

    return data.filter((character:Character) => {
        return character.name.toLowerCase().includes(query);
    });
}