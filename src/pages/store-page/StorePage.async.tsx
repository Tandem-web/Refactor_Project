import { lazy, LazyExoticComponent, ComponentType } from "react";
const StorePageAsync: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./StorePage'));
      }, 1000);
    })
);
export default StorePageAsync;