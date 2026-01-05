import { API_URL } from "./url";

//for get All Tasks
export const getTask = async() => {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    return data;
}

//for get by id task
export const getTaskById = async(id) => {
    const res = await fetch(`${API_URL}/tasks/${id}`);
    const data = await res.json();
    return data;
}

//for post new Task
export const addTask = async(task) => {
    const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
}

//for update task
export const updateTask = async(id,task) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
}

//for delete task
export const deleteTask = async(id) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    return data;
}

