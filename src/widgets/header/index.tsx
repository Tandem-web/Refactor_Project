import { Link } from "react-router-dom";
import './index.scss';
import AuthHeaderButton from "../../features/Auth/ui/auth-header-button";
import { useAuth } from "../../features/Auth/hooks/useAuth";

function Header() {
    const {isAuth} = useAuth();
    return (
        <>
            <header>
                <div className='page-header-nav'>
                    <Link to={'/'}>
                    <div className='page-header-nav-link'>
                        Главная страница
                    </div>
                    </Link>
                
                    <Link to={'/additional'}>
                    <div className='page-header-nav-link'>
                        Дополнительная страница
                    </div>
                    </Link>
                    { isAuth && (
                            <Link to={'/store'}>
                                <div className='page-header-nav-link'>
                                    Магазин
                                </div>
                            </Link>
                        )
                    }
                </div>
                <AuthHeaderButton/>
            </header>
        </>
    );
}

export default Header; 