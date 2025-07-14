import '../../shared/styles/page/page.scss'
import Store from "../../features/Store Zustand";


const StorePage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Страница магазина Zustand
            </div>

            <section>
                <div className="section-name">1. Список товаров</div>
                <div className="section-inner">
                    <Store/>
                </div>
            </section>
        </>
    )
}

export default StorePage