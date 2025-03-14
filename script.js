
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const tasks = document.getElementById('tasks');
const imgg = document.getElementById('imgg');
const body = document.body;


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskDiv = document.createElement('div');
    taskDiv.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'NOTE#1';


    deleteButton.addEventListener('click', () => {
        taskDiv.remove();
    });

    taskDiv.appendChild(deleteButton);
    tasks.appendChild(taskDiv);
    taskInput.value = '';
});


imgg.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    imgg.innerHTML = body.classList.contains('dark-theme') ? '☀' : '🌙';
});