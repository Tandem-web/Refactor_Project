import { Todos, Todo } from "../types/todos";
export function createToDo ():Todos {
    const todos:Todos = [];

    for (let i = 0; i < 50; i++) {
        const todo:Todo = {
            id: i,
            text: `My ToDo ${i+1}`,
            complete: Math.random() > 0.5
        }
        todos.push(todo);
    }

    return todos;
}