
// 2.a + b
const arrowFunction = (hello) => {
    console.log(hello + " Data Representation & Querying");
}

arrowFunction("Hi");

//2.c
const plus = (numberOne, numberTwo) => {
    let equal = parseInt(numberOne + numberTwo);
    console.log(equal);
}

plus(10, 5);

//2.d
const ages = [25, 31, 42, 77];

let a = ages.map(
    (item) => {
        if (item < 70)
            return item * 2;
        else
            return item;
    }
)

console.log(a);


//3.a

const myTasks = ["Cook", "Clean"];

//3.b

const addTask = (item) => {
    myTasks.push(item);
    console.log(item + " Has been inserted.\n" + "Current number of items in myTasks = " + myTasks.length);
}

addTask("Vacuum");
console.log(myTasks);

//3.c

let listAllTasks = () => {
    for (let i = 0; i < myTasks.length; i++) {
        console.log(myTasks[i]);
    }
}

listAllTasks();

//3.d

let deleteTask = (item) => {
    let index = myTasks.indexOf(item)
    myTasks.splice(index, 1);
    console.log(item + " Has been deleted.\n" + "Current number of items in myTasks = " + myTasks.length);
}

deleteTask("Cook");

