import { createContext } from "react";
import { TabContextProps } from "../types/tab";


export const TabContext = createContext<TabContextProps>({});

export const LOCAL_STORAGE_TAB_KEY = 'active_tab';