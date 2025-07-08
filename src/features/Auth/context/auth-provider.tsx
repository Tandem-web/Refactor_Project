import { useState, useEffect} from "react";
import {AuthModalContext} from "./auth-context"
import {AuthMode, AuthProviderProps} from "../model/types";


const AuthModalProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.LOGIN);

    const toggleAuthMode = (mode: AuthMode) => {
        setAuthMode(mode);
    }
    
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const defaultProps = {
        isAuthModalOpen: isModalOpen,
        openAuthModal: openModal,
        closeAuthModal: closeModal,
        toggleAuthMode: toggleAuthMode,  
        AuthModalMode: authMode,
    }

    return(
        <AuthModalContext.Provider value={defaultProps}>
            {children}
        </AuthModalContext.Provider>
    )
}

export default AuthModalProvider