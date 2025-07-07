import { useContext } from "react";
import TodoButton from "../ui/todo-button";
import { TabContext } from "../context/TabContext";
import { Tab } from "../types/tab";
import { useTab } from "../hooks/useTab";

function ToDoListFilter() {
    const { tab, changeTab} = useTab();
    return (
        <div className="todo-filter-container">
            <TodoButton type="text" tabName={Tab.ALL} changeTab={changeTab} selected={tab == Tab.ALL ? true : false} addClasses={['todo-filter-button']}>
                Все
            </TodoButton>
            <TodoButton type="text" tabName={Tab.ACTIVE} changeTab={changeTab} selected={tab == Tab.ACTIVE ? true : false} addClasses={['todo-filter-button']}>
                Активные
            </TodoButton>                
            <TodoButton type="text" tabName={Tab.COMPLETE} changeTab={changeTab} selected={tab == Tab.COMPLETE ? true : false} addClasses={['todo-filter-button']}>
                Выполненные
            </TodoButton>
        </div>
    );
}

export default ToDoListFilter;