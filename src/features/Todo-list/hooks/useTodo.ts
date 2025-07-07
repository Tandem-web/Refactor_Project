import { useState, startTransition, useOptimistic} from 'react';
import { mockApiCall } from '../utils/api'; // Импортируем API утилиту
import { Todo, Todos } from '../types/todos';

export interface useTodosResult{
    changeTodos: (newTodos: Todos) => void;
    addTodo: (inputValue: string) => Promise<void>;
    toggleTodo: (id: Todo["id"]) => Promise<void>;
    deleteTodo: (id: Todo["id"]) => Promise<void>;
    todos: Todos; 
}   

export enum ActionType {
    ADD = "ADD",
    TOGGLE = "TOGGLE",
    DELETE = "DELETE"
}

export interface Action {
    type: ActionType;
    payload: Todo["id"] | Todo;
}


export const useTodos = ():useTodosResult => {
    const [todos, setTodos] = useState<Todos>([]);

    const changeTodos = (newTodos: Todos):void => {
        setTodos(newTodos);
    }

    const [optimisticTodos, optimisticActions] = useOptimistic<Todos, Action>(
        todos,
        (state, { type, payload}) => {
            switch(type) {
                case 'ADD':
                    return [...state, payload as Todo];
                case 'TOGGLE':
                    return state.map((todo: Todo) => 
                        todo.id === payload as number ? {...todo, complete: true} : todo
                    );
                case 'DELETE':
                    return state.filter(todo => todo.id !== payload as number);
                default:
                    return state;
            }
        }
    );

    const addTodo = async (inputValue: string) => {
        if (!inputValue?.trim()) return;

        const todoNewItem:Todo = {
            id: optimisticTodos.length + 1,
            text: inputValue,
            complete: false
        };
        optimisticActions({ type: ActionType.ADD, payload: todoNewItem });

        startTransition(async () => {
            try {
                await mockApiCall(2500);
                startTransition(() => {
                    setTodos(prev => [...prev, todoNewItem]);
                });
            } catch (error) {
                console.error('Ошибка при добавлении:', error);
            }
        });
    };

    const toggleTodo = async (id: Todo["id"]) => {
        optimisticActions({ type: ActionType.TOGGLE, payload: id });

        startTransition(async () => {
            try {
                await mockApiCall(1000);
                setTodos(prev => prev.map((todo:Todo) => 
                    todo.id === id ? {...todo, complete: true} : todo
                ));
            } catch (error) {
                console.error('Ошибка изменения:', error);
            }
        });
    };

    const deleteTodo = async (id: Todo["id"]) => {
        optimisticActions({ type: ActionType.DELETE, payload: id });

        startTransition(async () => {
            try {
                await mockApiCall(1000);
                setTodos(prev => prev.filter((todo: Todo) => todo.id !== id));
            } catch (error) {
                console.error('Ошибка удаления:', error);
            }
        });
    };
    return {
        todos: optimisticTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        changeTodos
    };
};
