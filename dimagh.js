function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value + ' <button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}

function toggleTask(li) {
    li.classList.toggle('completed');
}

document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        toggleTask(event.target);
    }
});
