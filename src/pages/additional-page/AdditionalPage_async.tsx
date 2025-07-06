import { ComponentType, lazy, LazyExoticComponent } from "react";

const AdditionalPageAsync: LazyExoticComponent<ComponentType> = lazy (
    () => new Promise<{default: ComponentType}>(resolve => {
        setTimeout(() => {
            resolve(import('./AdditionalPage'))
        }, 2000);
    }) 
)

export default AdditionalPageAsync 