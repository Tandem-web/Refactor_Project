import { useContext } from "react";
import { LOCAL_STORAGE_TAB_KEY, TabContext } from "../context/TabContext";
import { Tab } from "../types/tab";

export interface useTabResult {
    changeTab: (tabName:Tab) => void;
    tab: Tab;
}

export function useTab():useTabResult{
    const {tab, setTab} = useContext(TabContext);

    const changeTab = (tabName:Tab):void => {
        setTab(tabName);
        localStorage.setItem(LOCAL_STORAGE_TAB_KEY, tabName);
    }

    return {tab, changeTab};
}