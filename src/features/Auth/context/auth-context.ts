import { createContext } from "react";
import { AuthModalContextProps } from "../model/types";

export const AuthModalContext = createContext<AuthModalContextProps | undefined>(undefined);

