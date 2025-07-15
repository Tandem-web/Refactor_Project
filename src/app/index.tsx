import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "../widgets/header";
import '../shared/styles/reset.scss'
import '../widgets/header/index.scss'
import { Suspense, useContext } from "react";
import Loader from "../widgets/loader/loader";
import MainPageAsync from "../pages/main-page/MainPage.async";
import AdditionalPageAsync from "../pages/additional-page/AdditionalPage_async";
import SrollToTopButton from "../widgets/scroll-to-top";
import AuthModal from "../features/Auth/components/auth-modal/index";
import AuthModalProvider from "../features/Auth/context/auth-modal-provider";
import { useAuth } from "../features/Auth/hooks/useAuth";
import StoreZustandPageAsync from "../pages/store-zustand-page/StoreZustandPage.async";
import runSomeCode from "./someEdu";
import StoreJotaiPageAsync from "../pages/store-jotai-page/StoreJotaiPage.async";
import TS_code_runner from "./TS_challenges";

const ProtectedRoute = ({ isAuth }: { isAuth: boolean }) => {
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
runSomeCode();
TS_code_runner();


const App = () => {    
    const {isAuth} = useAuth();

    return(
      <AuthModalProvider>
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
              <Route key="protected-route-1" element={<ProtectedRoute isAuth={isAuth} />}>
                <Route key="route-3" path={'/store-zustand'} element={(
                  <Suspense fallback={<Loader/>}> 
                    <StoreZustandPageAsync/>
                  </Suspense>
                )}/>
              </Route>
              <Route key="protected-route-2" element={<ProtectedRoute isAuth={isAuth} />}>
                <Route key="route-4" path={'/store-jotai'} element={(
                  <Suspense fallback={<Loader/>}> 
                    <StoreJotaiPageAsync/>
                  </Suspense>
                )}/>
              </Route>
            </Routes>
            <SrollToTopButton/>
            <AuthModal/> 
        </div>
      </AuthModalProvider>
    )
}

export default App;