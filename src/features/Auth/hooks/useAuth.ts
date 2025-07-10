import { useContext, useEffect } from "react";
import { AuthContext, LOCAL_STORAGE_AUTH_TOKEN_KEY } from "../context/auth-context";
import { User } from "../model/types";
import { login as apiLogin, register as apiRegister, logout as logoutApi, update_userInfo as apiUpdate} from "../api/api";

interface useAuthResult{
  user: User | null,
  login: (email: string, password: string) => Promise<void>,
  register: (username: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  logout: (token: string) => Promise<void>;
  isAuth: boolean;
  error: string | null;
}

export const useAuth = ():useAuthResult => {
  const {setIsAuth, setUser, setError, user, error, isAuth} = useContext(AuthContext);

  useEffect(() => {
    if (user.token) {
      const fetchData = async () => {
        try {
          const data = await apiUpdate(user.token);
          setIsAuth(true);
          setUser ({ info: data, token: user.token });
        } catch (err) {
          setError(err.message);
        }
      };
      fetchData();
    }
  }, [user.token]);

  useEffect(() => {
    if(isAuth){
      localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, user.token);
    }else{
      localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
      setUser({info: null, token: null});
    }
  }, [isAuth]);


  const login:useAuthResult['login'] = async (email, password) => {
    try {
        const data = await apiLogin(email, password);
        setUser (data);
        setIsAuth(true);
        setError(null);
    } catch (err) {
        setIsAuth(false);
        setError(err.message);
    }
  };
  const register:useAuthResult['register'] = async (username, email, password, confirmPassword) => {
    try {
        const data = await apiRegister(username, email, password, confirmPassword);
        setError(null);
    } catch (err) {
        setError(err.message);
    }
  };

  const logout:useAuthResult['logout'] = async (token) => {
    try {
        const data = await logoutApi(token);
        setError(null);
        setIsAuth(false);
    } catch (err) {
        setError(err.message);
    }
  };

  return {
    user: user,
    login: login,
    register: register,
    logout: logout,
    isAuth: isAuth,
    error: error
  }
};