import { ReactElement } from "react";

export enum Tab {
    ALL = 'all',
    ACTIVE = 'active',
    COMPLETE = 'complete'
}

export interface TabContextProps{
    tab?: Tab;
    setTab?: React.Dispatch<React.SetStateAction<Tab>>;
}

export interface TabProviderProps{
    children: ReactElement; 
}

