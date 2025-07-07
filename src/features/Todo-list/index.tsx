import { useEffect } from "react";
import ToDoList from "./components/ToDoList";
import ToDoListFilter from "./components/ToDoListFilter";
import ToDoListHeader from "./components/ToDoListHeader";
import { useTodos } from "./hooks/useTodo";
import { createToDo } from "./utils/createTodo";
import { useTab } from "./hooks/useTab";
import "./styles/index.scss"


function ToDo() {
    const {todos, changeTodos, deleteTodo, toggleTodo, addTodo} = useTodos();
    const {tab} = useTab()
    
    useEffect(() => {
        changeTodos(createToDo());
    }, []);

    return (    
        <div className='todo-container'>
            <ToDoListHeader addTodo={addTodo}/>
            <ToDoListFilter/>
            <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} tab={tab}/>
        </div>
    );
}
export default ToDo;