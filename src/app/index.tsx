import { Route, Routes } from "react-router-dom";
import Header from "../widgets/header";
import '../widgets/header/index.scss'
import { Suspense } from "react";
import Loader from "../widgets/loader/loader";
import MainPageAsync from "../pages/main-page/MainPage.async";
import AdditionalPageAsync from "../pages/additional-page/AdditionalPage_async";
import SrollToTopButton from "../widgets/scroll-to-top";
import AuthModal from "../features/Auth/ui/auth-modal/modal";

const App = () => {
    return(
        <div className="page">
            <Header/>
            <Routes>
              <Route key="route-0" path={'/'} element={(
                <Suspense fallback={<Loader/>}> 
                  <MainPageAsync/>
                </Suspense>
              )}/>
              <Route key="route-1" path={'/additional'} element={(
                <Suspense fallback={<Loader/>}> 
                  <AdditionalPageAsync/>
                </Suspense>
              )}/>
            </Routes>
            <SrollToTopButton/>
            <AuthModal/> 
        </div>
    )
}

export default App;