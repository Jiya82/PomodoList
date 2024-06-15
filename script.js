// Pomodoro Timer
let isRunning = false;
let timer;
let minutes = 25;
let seconds = 0;

const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(countDown, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    startStopButton.textContent = 'Start';
});

function countDown() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            isRunning = false;
            startStopButton.textContent = 'Start';
            alert("Time's up!");
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// To-Do List
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    if (taskInput.value.trim()) {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && taskInput.value.trim()) {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
