import { FaArrowRight } from 'react-icons/fa6';
import './styles/index.scss';
import { useContext } from 'react';
import { AuthModalContext } from '../../context/auth-context';
import { useAuth } from '../../hooks/useAuth';

function AuthHeaderButton() {
    const {isAuth, logout, user} = useAuth();
    const {openAuthModal} = useContext(AuthModalContext);
    return (
        <>
            {
                isAuth ? (
                    <div className="auth-header-button-container">
                        <div className="auth-button" onClick={() => logout(user.token)}>
                            Выйти
                        </div>
                    </div>
                ) : (
                    <div className="auth-header-button-container">
                        <div className="auth-button" onClick={() => openAuthModal()}>
                            Войти
                            <FaArrowRight/>
                        </div>
                    </div>
                )
            }
        </>

    );
}

export default AuthHeaderButton;