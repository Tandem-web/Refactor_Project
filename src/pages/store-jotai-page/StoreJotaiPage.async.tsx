import { lazy, LazyExoticComponent, ComponentType } from "react";
const StoreJotaiPage: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./StoreJotaiPage'));
      }, 200);
    })
);
export default StoreJotaiPage;