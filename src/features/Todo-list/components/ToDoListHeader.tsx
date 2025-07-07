import { useRef } from "react";
import TodoButton from "../ui/todo-button";
import { useTodosResult } from "../hooks/useTodo";

interface TodoHeaderProps{
    addTodo: useTodosResult['addTodo'],
}

const ToDoListHeader: React.FC<TodoHeaderProps> = ({addTodo}) => {
    const inputRef = useRef(null);
    
    return (
        <div className="todo-header-container">
            <input type="text" name="todo-input-text" ref={inputRef} id="todo-input-text" placeholder="Введите вашу задачу" className="todo-header-input"/>
            <div className="todo-header-buttons-container">
                <TodoButton type={'text'} addTodo={addTodo} inputValue={inputRef} addClasses={['todo-add-button']}>
                    Добавить
                </TodoButton>
            </div>
        </div>
    );
}

export default ToDoListHeader;