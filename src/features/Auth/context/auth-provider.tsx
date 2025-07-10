import { useState, useEffect} from "react";
import {AuthContext, LOCAL_STORAGE_AUTH_TOKEN_KEY} from "./auth-context"
import { AuthProviderProps, User } from "../model/types";

const authToken = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) as User["token"] || null;
const defaultUser:User = {
    info: null,
    token: authToken
}

const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser ] = useState<User>(defaultUser);
    const [error, setError] = useState<string | null>(null);
  

    const defaultProps = {
        user: user,
        setUser: setUser,
        setIsAuth: setIsAuth,
        isAuth: isAuth,
        error, setError,
    }

    return(
        <AuthContext.Provider value={defaultProps}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider