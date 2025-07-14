import '../../shared/styles/page/page.scss'
import Store from "../../features/Store Jotai";
import { Provider } from 'jotai';


const StoreZustandPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Страница магазина Jotai
            </div>

            <section>
                <div className="section-name">1. Список товаров</div>
                <div className="section-inner">
                    <Provider>
                        <Store/>
                    </Provider>
                </div>
            </section>
        </>
    )
}

export default StoreZustandPage