import { lazy, LazyExoticComponent, ComponentType } from "react";
const StoreZustandPageAsync: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./StoreZustandPage'));
      }, 200);
    })
);
export default StoreZustandPageAsync;