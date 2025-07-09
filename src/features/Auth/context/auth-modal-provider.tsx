import { useState } from "react";
import {AuthModalContext} from "./auth-context"
import {AuthMode, AuthModalProviderProps} from "../model/types";


const AuthModalProvider:React.FC<AuthModalProviderProps> = ({children}) => {
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