import { FaArrowRight } from 'react-icons/fa6';
import './styles/index.scss';
import { useContext } from 'react';
import { AuthModalContext } from '../../context/auth-context';

function AuthHeaderButton() {
    const {openAuthModal} = useContext(AuthModalContext);
    return (
        <>
            <div className="auth-header-button-container">
                <div className="auth-button" onClick={() => openAuthModal()}>
                    Войти
                    <FaArrowRight/>
                </div>
            </div>
        </>

    );
}

export default AuthHeaderButton;