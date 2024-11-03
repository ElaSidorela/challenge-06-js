
/* Display current date */
function displayCurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    document.getElementById('currentDate').innerText = `Today's Date: ${formattedDate}`;
}

/*  Add new task section */
function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    const taskTime = document.getElementById('taskTime').value;
    const taskDate = document.getElementById('taskDate').value;

   
    if (!taskDescription || !taskTime || !taskDate) {
        alert('Please fill in all fields.');
        return;
    }

    const task = {
        description: taskDescription,
        time: taskTime,
        date: taskDate
    };

    /* Add task to local storage */
    saveTaskToLocalStorage(task);

    displayTask(task);


   
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskTime').value = '';
    document.getElementById('taskDate').value = '';   // Clear inputs
}

function displayTask(task) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item');
    taskItem.innerHTML = `
        <div>
            <strong>${task.description}</strong> at ${task.time} on ${task.date}
            <button class="btn btn-danger btn-sm float-right" onclick="removeTask(this)">Remove</button>
        </div>
    `;
    
    /* Highlight if the task date is today  */
    const currentDate = new Date().toISOString().split('T')[0];
    if (task.date === currentDate) {
        taskItem.classList.add('highlight-current-date');
    }

    taskList.appendChild(taskItem);
}


function removeTask(element) {
    const taskItem = element.parentElement.parentElement;
    const taskDescription = taskItem.querySelector('strong').innerText;
    const taskTime = taskItem.innerText.split(' at ')[1].split(' on ')[0];
    const taskDate = taskItem.innerText.split(' on ')[1];

    /* Remove task from local storage */
    removeTaskFromLocalStorage({ description: taskDescription, time: taskTime, date: taskDate });

    /* Remove task from the DOM */
    taskItem.remove();
}

/* Save task to local storage */
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* Remove task from local storage */
function removeTaskFromLocalStorage(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => 
        task.description !== taskToRemove.description ||
        task.time !== taskToRemove.time ||
        task.date !== taskToRemove.date
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/* Display tasks from local storage */
function displayTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => displayTask(task));
}


function init() {
    displayCurrentDate();
    displayTasksFromLocalStorage();
}

window.onload = init;
