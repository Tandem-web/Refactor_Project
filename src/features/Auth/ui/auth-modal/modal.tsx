import { createPortal } from "react-dom";

function AuthModal() {

    return createPortal(
        <>
            <div className="auth-modal-container">
                <div className="auth-modal-inner">
                    123
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    );
}

export default AuthModal;