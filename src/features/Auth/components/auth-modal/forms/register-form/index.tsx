import { useContext, useState } from "react";
import { AuthModalContext } from "../../../../context/auth-context";
import { AuthMode } from "../../../../model/types";
import { useAuth } from "../../../../hooks/useAuth";

function Register() {
    const { register, error } = useAuth();
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();


    const { toggleAuthMode, closeAuthModal } = useContext(AuthModalContext);

    const handleRegister = async () => {
        await register(username, email, password, confirmPassword)
        .then(() => closeAuthModal());
    };

    return (
        <>
            <div className="modal-form-header">
                <div className="modal-form-title">Регистрация</div>
                <div className="modal-change-form-mode" onClick={() => toggleAuthMode(AuthMode.LOGIN)}>Есть аккаунт?</div>
            </div>
            <div className="modal-form-container">
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-username">Имя пользователя</label>
                    <input type="text" id="modal-form-input-username" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-email">E-mail</label>
                    <input type="email" id="modal-form-input-email" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-password">Пароль</label>
                    <input type="password" id="modal-form-input-password" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-password">Подтвердите пароль</label>
                    <input type="password" id="modal-form-input-password" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <div className="modal-form-login-button" onClick={() => handleRegister()}>
                        Зарегистрироваться
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;