import { useState } from 'react';
import CatalogSearch from './components/CatalogSearch';
import CharactersCatalogList from './components/CharactersCatalog';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './utils/queries';
import { CharactersData } from './types/characters';
import "./styles/index.scss";

function CharactersCatalog() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { loading, error, data } = useQuery<CharactersData>(GET_ALL_CHARACTERS);

    return (
        <div className='catalog-container'>
                <CatalogSearch setSearch={setSearchQuery}/>
                <CharactersCatalogList searchQuery={searchQuery} isLoading={loading} data={data ? data.characters.results : []}/>
        </div>
    );
}

export default CharactersCatalog;