import { lazy, LazyExoticComponent, ComponentType } from "react";
const StorePageAsync: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./StorePage'));
      }, 200);
    })
);
export default StorePageAsync;