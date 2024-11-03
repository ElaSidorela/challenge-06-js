Exercise 01
Create a function to get from the user input the task name and time and add the task to
the list. Display the current date on top of the screen as visual info for the user. Display an
alert if the user tries to add a task without filling in the task name or task time or task
date.

Exercise 02
Create a function to remove a task from the list after clicking a button.

Exercise 03
Create a function that highlights the task/s whose current date to be done matches the
current date of the user’s computer. Use the CSS class ‘highlight-current-date’ that is in
the starter file.

Exercise 04 (BONUS)
Save the task list in localStorage so that it persists on browser refresh.

steps:

Display the current date.
Add a task to the list and validate inputs.
Remove a task from the list.
Highlight tasks with the current date.
Save and retrieve tasks from localStorage. 


Explanation for func. on JS:
displayCurrentDate: This function displays the current date at the top of the page.
addTask: This function adds a new task to the list after validating the inputs.
displayTask: This function creates a new list item for the task and adds it to the task list. It also highlights the task if its date matches today's date.
removeTask: This function removes a task from the list and from local storage.
saveTaskToLocalStorage: This function saves a task to local storage.
removeTaskFromLocalStorage: This function removes a specific task from local storage.
displayTasksFromLocalStorage: This function retrieves tasks from local storage and displays them in the list.
init: This function initializes the app by displaying the current date and loading tasks from local storage.