import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AuthModalContext } from "../../context/auth-context";
import './styles/index.scss'
import LogIn from "./forms/login-form";
import { AuthMode } from "../../model/types";
import Register from "./forms/register-form";

function AuthModal() {
    const {isAuthModalOpen, closeAuthModal, AuthModalMode} = useContext(AuthModalContext);

    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        closeAuthModal();
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeAuthModal();
        }
    };
    
    useEffect(() => {
        if (isAuthModalOpen) {
            document.body.style.overflow 
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isAuthModalOpen]);

    return createPortal(
        <>
            {
                isAuthModalOpen && (
                    <div className="auth-modal-container" onClick={(e) => handleOverlayClick(e)}>
                        <div className="auth-modal-inner" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                            {
                                AuthModalMode == AuthMode.LOGIN ? (
                                    <LogIn/>
                                ) : (
                                    <Register/>
                                )
                            }
                        </div>
                    </div>   
                )
            }
        </>,
        document.getElementById('modal-root')
    );
}

export default AuthModal;