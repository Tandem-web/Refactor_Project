import { lazy, LazyExoticComponent, ComponentType } from "react";
const ProjectPageAsync: LazyExoticComponent<ComponentType>= lazy(
  () => 
    new Promise<{ default: ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve(import('./ProjectPage'));
      }, 1000);
    })
);
export default ProjectPageAsync;