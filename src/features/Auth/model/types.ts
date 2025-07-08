import { ReactElement } from "react";

export interface UserAuthorized{
    isAuthorized: boolean;
}

export enum AuthMode {
    LOGIN = 'login',
    REGISTER = 'register'
}

export interface AuthModalContextProps{
    isAuthModalOpen: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
    toggleAuthMode: (mode:AuthMode) => void;
    AuthModalMode: AuthMode;
}

export interface AuthProviderProps{
    children: ReactElement; 
}
