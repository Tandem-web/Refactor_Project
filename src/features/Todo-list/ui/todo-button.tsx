import React from "react";
import { useTab, useTabResult } from "../hooks/useTab";
import { useTodosResult } from "../hooks/useTodo";
import { Tab } from "../types/tab";

interface TodoButtonProps {
    addClasses?: string[];
    type: 'text' | 'icon';
    tabName?: Tab;
    selected?: boolean;
    inputValue?: React.RefObject<HTMLInputElement>;
    changeTab?: useTabResult["changeTab"];
    addTodo?: useTodosResult["addTodo"];
    toggleTodo?: useTodosResult["toggleTodo"]; 
    deleteTodo?: useTodosResult["deleteTodo"];
    todoId?: number;
    children?: React.ReactNode;
}

const TodoButton: React.FC<TodoButtonProps> = (props) => {
    // Функция для рендеринга текстовой кнопки
    const renderTextButton = () => (
        <div 
            className={`todo-button todo-button-text ${props.addClasses?.join(' ')} ${props.selected ? 'selected' : ''}`}
            onClick={() => {
                if (props.tabName) {
                    props.changeTab(props.tabName);
                } else if (props.addTodo && props.inputValue) {
                    props.addTodo(props.inputValue.current?.value || '');
                }
            }}
        >
            {props.children}
        </div>
    );

    // Функция для рендеринга иконки
    const renderIconButton = (action: 'toggle' | 'delete') => (
        <div 
            className={`todo-button todo-button-icon ${props.addClasses?.join(' ')}`}
            onClick={() => {
                if (action === 'toggle' && props.toggleTodo) {
                    props.toggleTodo(props.todoId!);
                } else if (action === 'delete' && props.deleteTodo) {
                    props.deleteTodo(props.todoId!);
                }
            }}
        >
            {props.children}
        </div>
    );

    // Основной рендеринг
    return (
        <>
            {props.type === 'text' && renderTextButton()}
            {props.type === 'icon' && props.toggleTodo && renderIconButton('toggle')}
            {props.type === 'icon' && props.deleteTodo && renderIconButton('delete')}
        </>
    );
};

export default TodoButton;
