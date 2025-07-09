import { useContext, useState } from "react";
import { AuthModalContext } from "../../../../context/auth-context";
import { AuthMode } from "../../../../model/types";
import { useAuth } from "../../../../hooks/useAuth";

function LogIn() {
    const { login, error } = useAuth();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const { toggleAuthMode, closeAuthModal} = useContext(AuthModalContext);

    const handleLogin = async () => {
        await login(email, password)
        .then(() => closeAuthModal())
    };

    return (
        <>
            <div className="modal-form-header">
                <div className="modal-form-title">Вход</div>
                <div className="modal-change-form-mode" onClick={() => toggleAuthMode(AuthMode.REGISTER)}>Регистрация</div>
            </div>
            <div className="modal-form-container">
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-email">E-mail</label>
                    <input type="email" id="modal-form-input-email" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-password">Пароль</label>
                    <input type="password" id="modal-form-input-password" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <div className="modal-form-login-button" onClick={() => handleLogin()}>
                        Войти
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;