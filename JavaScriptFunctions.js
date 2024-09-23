// Function to multiply each number under 70 by 2 in the array
const ages = [25, 31, 42, 77];
const updatedAges = ages.map(item => {
    if (item < 70)
        return item * 2;
    else
        return item;
});

console.log(updatedAges); // Output the updated ages array

// 3.a - Create an array of strings
const myTasks = ["Cook", "Clean"];

// 3.b - Function to add a task to the array
const addTask = (item) => {
    myTasks.push(item); // Add the task to the array
    console.log(item + " Has been inserted.\n" + "Current number of items in myTasks = " + myTasks.length); // Log the insertion
}

addTask("Vacuum"); // Add a new task
console.log(myTasks); // Output the current tasks

// 3.c - Function to list all tasks in the array
let listAllTasks = () => {
    for (let i = 0; i < myTasks.length; i++) { // Iterate over the tasks
        console.log(myTasks[i]); // Log each task
    }
}

listAllTasks(); // List all tasks

// 3.d - Function to delete a task from the array
let deleteTask = (item) => {
    let index = myTasks.indexOf(item); // Find the index of the task
    if (index > -1) { // If the task is found
        myTasks.splice(index, 1); // Remove the task from the array
        console.log(item + " Has been deleted.\n" + "Current number of items in myTasks = " + myTasks.length); // Log the deletion
    } else {
        console.log(item + " not found in myTasks."); // Log if the task is not found
    }
}

deleteTask("Cook"); // Delete a task
console.log(myTasks); // Output the current tasks