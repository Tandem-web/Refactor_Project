import React from "react";
import { Character } from "../types/characters";

interface CharacterCardProps{
    isLoading: boolean;
    info?: Character;
    key: string;
}

const CharacterCard:React.FC<CharacterCardProps> = (props) => {
    const { isLoading,  info} = props;

    return (
       <>
            <div className={`character-card-container ${isLoading ? 'character-card-loader' : ''}`}>
                <div className={`character-status-flag ${isLoading ? '' : `status-${info.status.toLowerCase()}`}`}>
                    {isLoading ? '' : info.status}
                </div>
                <div className="character-card-img">
                    {
                        isLoading ? (
                            <></>
                        ):(
                            <img src={info.image} alt={info.name} />
                        )
                    }
                </div>
                <div className="character-card-info">
                    <div className="character-card-info-row">
                        <div className="character-card-info-row-line-name">{isLoading ? '' : 'Name'}</div>
                        <div className="character-card-info-row-line-value">{isLoading ? '' : info.name}</div>
                    </div>
                    <div className="character-card-info-row">
                        <div className="character-card-info-row-line-name">{isLoading ? '' : 'Gender'}</div>
                        <div className="character-card-info-row-line-value">{isLoading ? '' : info.gender}</div>
                    </div>
                </div>
            </div>
       </> 
    );
}

export default CharacterCard;