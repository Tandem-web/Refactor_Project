import { useMemo, useState, useEffect} from "react";
import { LOCAL_STORAGE_TAB_KEY, TabContext } from "./TabContext"
import { Tab, TabProviderProps } from "../types/tab";

const defaultTab = localStorage.getItem(LOCAL_STORAGE_TAB_KEY) as Tab || Tab.ALL;

const TabProvider:React.FC<TabProviderProps> = ({children}) => {
    const [tab, setTab] = useState<Tab>(defaultTab)

    const defaultProps = {
        tab: tab,
        setTab: setTab
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TAB_KEY, tab);
    }, [tab]);

    return(
        <TabContext.Provider value={defaultProps}>
            {children}
        </TabContext.Provider>
    )
}

export default TabProvider