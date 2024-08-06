document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addTaskBtn = document.querySelector('.add-task-button');
    const tasksContainer = document.querySelector('.tasks');
    let taskIdCounter = 0;

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const task = document.createElement('div');
            task.classList.add('task');
            task.id = `task-${taskIdCounter++}`;

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            taskContent.classList.add('task-content');

            const taskInputField = document.createElement('input');
            taskInputField.type = 'text';
            taskInputField.classList.add('task-edit-input');
            taskInputField.value = taskText;
            taskInputField.style.display = 'none';

            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttons-container');

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-task-button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => {
                if (taskContent.style.display !== 'none') {
                    taskContent.style.display = 'none';
                    taskInputField.style.display = 'inline-block';
                    editBtn.textContent = 'Save';
                    taskInputField.focus();
                } else {
                    const newTaskText = taskInputField.value.trim();
                    if (newTaskText !== '') {
                        taskContent.textContent = newTaskText;
                    }
                    taskContent.style.display = 'inline-block';
                    taskInputField.style.display = 'none';
                    editBtn.textContent = 'Edit';
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-task-button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                const taskToRemove = document.getElementById(task.id);
                if (taskToRemove) {
                    tasksContainer.removeChild(taskToRemove);
                }
            });

            buttonsContainer.appendChild(editBtn);
            buttonsContainer.appendChild(deleteBtn);
            task.appendChild(taskContent);
            task.appendChild(taskInputField);
            task.appendChild(buttonsContainer);
            tasksContainer.appendChild(task);

            taskInput.value = '';
            taskInput.focus();
        }
    });
});
