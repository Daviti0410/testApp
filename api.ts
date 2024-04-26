import { ITask } from "./types/task"

const baseUrl = 'http://localhost:3000'

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/api/todos`)
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/api/todos`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo
}