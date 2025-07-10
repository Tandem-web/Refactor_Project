import { createContext } from "react";
import { AuthContextProps, AuthModalContextProps } from "../model/types";

export const AuthModalContext = createContext<AuthModalContextProps | undefined>(undefined);

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const LOCAL_STORAGE_AUTH_TOKEN_KEY = 'auth_token';