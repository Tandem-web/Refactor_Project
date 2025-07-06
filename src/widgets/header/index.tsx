import { Link } from "react-router-dom";
import './index.scss';

function Header() {
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
                </div>
            </header>
        </>
    );
}

export default Header; 