import {Todos, Todo} from '../types/todos'
import { Tab } from '../types/tab';

export function filterTodos(todos:Todos, tab: Tab):Todos {
    return todos.filter((todo:Todo) => {
        if (tab === 'all') {
        return true;
        } else if (tab === 'active') {
        return !todo.complete;
        } else if (tab === 'complete') {
        return todo.complete;
        }
    });
}