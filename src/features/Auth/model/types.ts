import { ReactElement } from "react";

type UserInfo = {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}
export interface User {
    info: UserInfo | null;
    token: string | null;
}
export interface AuthContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface AuthProviderProps{
    children: ReactElement; 
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

export interface AuthModalProviderProps{
    children: ReactElement; 
}
