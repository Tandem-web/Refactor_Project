import { FaCheck } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import TodoButton from "../ui/todo-button";
import { useMemo } from "react";
import { filterTodos } from "../utils/filterTodo";
import { Todos } from "../types/todos";
import { Tab } from "../types/tab";
import { useTodosResult } from "../hooks/useTodo";

interface TodoListProps{
    todos: Todos;
    tab: Tab;
    toggleTodo: useTodosResult["toggleTodo"];
    deleteTodo: useTodosResult["deleteTodo"];
}

const TodoList:React.FC<TodoListProps> = ({todos, tab, toggleTodo, deleteTodo}) => {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    return (
        <>
            <div className="todo-list-container">
                <ul className="todo-list">
                    {
                        visibleTodos.map((todo) => (
                            <li key={todo.id} className={`todo-list-item ${todo.complete ? 'complete' : ''}`}>
                                <div className="todo-list-item-text">
                                    {todo.text}
                                </div>
                                <div className="todo-list-item-buttons">
                                    {
                                        todo.complete ? null 
                                        : (
                                            <TodoButton type="icon" todoId={todo.id} toggleTodo={toggleTodo} addClasses={['check']}>
                                                <FaCheck/>
                                            </TodoButton>
                                        )
                                    }
                                    <TodoButton type="icon" todoId={todo.id} deleteTodo={deleteTodo} addClasses={['trash']}>
                                        <FaTrash/>
                                    </TodoButton>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default TodoList;