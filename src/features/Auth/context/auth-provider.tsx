import { useState, useEffect} from "react";
import {AuthContext, AuthModalContext} from "./auth-context"
import { AuthProviderProps, User } from "../model/types";
import { login as apiLogin, register as apiRegister, logout as logoutApi} from "../api/api";


const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser ] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const login = async (email: string, password: string) => {
        try {
            const data = await apiLogin(email, password);
            setIsAuth(true);
            setUser (data);
            setError(null);
        } catch (err) {
            setIsAuth(false);
            setError(err.message);
        }
    };
    const register = async (username: string, email: string, password: string, confirmPassword: string) => {
        try {
            const data = await apiRegister(username, email, password, confirmPassword);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    const logout = async (token: string) => {
        try {
            const data = await logoutApi(token);
            
            setError(null);
            setIsAuth(false);
            setUser(null);
        } catch (err) {
            setError(err.message);
        }
    };

    const defaultProps = {
        user: user,
        login: login,
        register: register,
        logout: logout,
        isAuth: isAuth,
        error: error
    }

    return(
        <AuthContext.Provider value={defaultProps}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider