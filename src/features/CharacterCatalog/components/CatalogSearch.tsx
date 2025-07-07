import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { getRandomText } from "../utils/getRandomText";


interface CatalogSearchProps{
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}   

const CatalogSearch: React.FC<CatalogSearchProps> = (props) => {
    const { setSearch } = props;

    const [placeholder, setPlaceholder] = useState<string>(getRandomText());  

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <div className="catalog-search-wrapper">
                <div className="catalog-search-container">
                    <input placeholder={placeholder} onChange={onChangeHandler} type="text" id="catalog-search-input"  className="catalog-search"/>
                    <IoSearch className="catalog-search-icon"/>
                </div>                
            </div>
        </>
    );
}

export default CatalogSearch;