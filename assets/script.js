const form = document.getElementById('task-form');
const tasklist = document.getElementById('tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    //form.requestFullscreen();
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptiionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptiionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    tasklist.appendChild(taskContainer);
}