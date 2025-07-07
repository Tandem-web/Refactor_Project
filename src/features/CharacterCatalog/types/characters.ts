export enum CharacterLiveStatus{
    ALIVE = 'Alive',
    DEAD = 'Dead',
    UNKNOWN = 'unknown'
}
export enum CharacterGender {
    MALE = 'Male',
    FEMALE = 'Female',
    UNKNOWN = 'unknown'
}

export interface Character {
    name: string;
    image: string;
    status: CharacterLiveStatus;
    gender: CharacterGender;
}
export interface CharactersData {
    characters: {
        results: Character[];
    };
}

export type Characters = Character[];

export interface CharactersVars {
    // Не используется
}