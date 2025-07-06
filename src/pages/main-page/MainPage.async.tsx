import { lazy, LazyExoticComponent, ComponentType } from "react";
const MainPageAsync: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./MainPage'));
      }, 2000);
    })
);
export default MainPageAsync;