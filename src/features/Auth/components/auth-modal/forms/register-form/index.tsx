import { useContext } from "react";
import { AuthModalContext } from "../../../../context/auth-context";
import { AuthMode } from "../../../../model/types";

function Register() {
    const { toggleAuthMode } = useContext(AuthModalContext);
    return (
        <>
            <div className="modal-form-header">
                <div className="modal-form-title">Регистрация</div>
                <div className="modal-change-form-mode" onClick={() => toggleAuthMode(AuthMode.LOGIN)}>Есть аккаунт?</div>
            </div>
            <div className="modal-form-container">
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-username">Имя пользователя</label>
                    <input type="text" id="modal-form-input-username" className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-email">E-mail</label>
                    <input type="email" id="modal-form-input-email" className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-password">Пароль</label>
                    <input type="password" id="modal-form-input-password" className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <label htmlFor="modal-form-input-password">Подтвердите пароль</label>
                    <input type="password" id="modal-form-input-password" className="modal-form-input"/>
                </div>
                <div className="modal-form-row">
                    <div className="modal-form-login-button">
                        Зарегистрироваться
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;