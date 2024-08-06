document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addTaskBtn = document.querySelector('.add-task-button');
    const tasksContainer = document.querySelector('.tasks');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const task = document.createElement('div');
            task.classList.add('task');

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-task-button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasksContainer.removeChild(task);
            });

            task.appendChild(taskContent);
            task.appendChild(deleteBtn);
            tasksContainer.appendChild(task);

            taskInput.value = '';
            taskInput.focus();
        }
    });
});
