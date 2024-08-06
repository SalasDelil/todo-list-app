document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addTaskButton = document.querySelector('.add-task-button');
    const taskContainer = document.querySelector('.tasks');
    const deleteTaskButton = document.querySelector('delete-task-button');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText != '') {
            const task = document.createElement('div');
            task.classList.add('task');
            task.textContent = taskText;

            task.addEventListener('click', () => {
                taskContainer.removeChild(task);
            });

            taskContainer.appendChild(task);
            taskInput.value = '';
            taskInput.focus();
        }
        console.log(taskContainer);
    })
})