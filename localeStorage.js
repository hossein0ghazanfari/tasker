export function saveTasks (data) {
    let taskha = JSON.parse(localStorage.getItem("tasks")) || [];
    taskha.push(data);
    localStorage.setItem("tasks",JSON.stringify(taskha));
}

export function getAllDataFromLocalStorage () {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}