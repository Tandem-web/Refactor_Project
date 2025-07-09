import { ReactElement } from "react";

export interface User {
    info: {
        id: number;
        name: string;
        email: string;
        created_at: string;
        updated_at: string;
    };
    token: string
}
export interface AuthContextProps {
  user: User | null;
  isAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  logout: (token: string) => Promise<void>;
  error: string | null;
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
