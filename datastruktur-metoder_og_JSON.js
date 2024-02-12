const peopleArrayWithObjects = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        email: "alice@example.com",
        country: "USA",
        hobbies: ["Reading", "Hiking", "Photography", "Swimming"]
    },
    {
        id: 2,
        name: "Bob",
        age: 35,
        email: "bob@example.com",
        country: "Canada",
        hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"]
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        email: "charlie@example.com",
        country: "UK",
        hobbies: ["Painting", "Skiing", "Music", "Cycling"]
    },
    {
        id: 4,
        name: "David",
        age: 40,
        email: "david@example.com",
        country: "Australia",
        hobbies: ["Swimming", "Fishing", "Reading"]
    },
    {
        id: 5,
        name: "Eva",
        age: 32,
        email: "eva@example.com",
        country: "Germany",
        hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"]
    }
]

//! 0.
/* Just to keep things organized a little */
function consoleLog(task, arg, arg2) {
    console.log("____________________________");
    console.log("Task " + task + ":");
    console.log(arg);
    if (arg2 !== undefined) {
        console.log(arg2);
    }
}

//! 1.

/* console.log the array */
consoleLog(1, peopleArrayWithObjects);

//! 1.1:

/* create variables for firstPerson (first person object in the array) and lastPerson (last person object in the array) for peopleArrayWithObjects: */
const firstPerson = peopleArrayWithObjects[0];
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];

//! 1.2

/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/
consoleLog(1.2, Object.entries(firstPerson), Object.entries(lastPerson));

//! 1.3
/* console.log the hobbies of the first person using Object.entries. Expected output is to be an array with 4 elements */
consoleLog(1.3, Object.entries(firstPerson).find(entry => entry[0] === "hobbies")[1]);

//! 1.4

/* Use .map instead of Object.entries to achieve the same result in the console as in 1.3: */
consoleLog(1.4, firstPerson.hobbies.map(hobby => hobby));

//! 1.5.

/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. Expected output is an array with common hobbies */
const commonHobbies = firstPerson.hobbies.filter(hobby => lastPerson.hobbies.includes(hobby));
consoleLog(1.5, commonHobbies);

//! 1.6.

/* Use .map to display all the persons with their information on your page DOM manipulation (look at the shared repo of the lessons in the js file mappedOutArray.js for tips). It should also show what hobbies they have in common. Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */
const taskDiv = document.getElementById("task");

const peopleElements = peopleArrayWithObjects.map(person => {
    const personInfo = document.createElement("p");
    personInfo.textContent = `
        ${person.name},
        ${person.age},
        ${person.email},
        ${person.country},
        Hobbies: ${person.hobbies.join(", ")}
    `;
    return personInfo;
});

peopleElements.forEach(element => taskDiv.appendChild(element));

//! 1.7

/* Use .filter to find all persons who have atleast 1 hobby that is the same hobbies as firstPerson. Display this using DOM manipulation */
const commonHobbyPeople = peopleArrayWithObjects.filter(person =>
    person.hobbies.some(hobby => firstPerson.hobbies.includes(hobby))
);

commonHobbyPeople.forEach(person => {
    const personElement = document.createElement("p");
    personElement.textContent = `
        ${person.name}, 
        Hobbies: ${person.hobbies.join(", ")}
    `;
    taskDiv.appendChild(personElement);
});

//! 2

/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */
const randomNumbersArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
consoleLog(2, randomNumbersArray);

//! 2.1

/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */
const oddNumbers = randomNumbersArray.filter(number => number % 2 !== 0);
const evenNumbers = randomNumbersArray.filter(number => number % 2 === 0);
consoleLog(2.1, oddNumbers, evenNumbers);

//! 2.2

/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */
const findLargestNumber = (array) => Math.max(...array);
consoleLog(2.2, findLargestNumber(oddNumbers), findLargestNumber(evenNumbers));

//! 2.3.

/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */
const sumOfNumbers = (numbersArray) => numbersArray.reduce((acc, curr) => acc + curr, 0);
consoleLog(2.3, sumOfNumbers(oddNumbers), sumOfNumbers(evenNumbers));

//! 2.4

/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */
const compareSums = (array1, array2) => {
    const sum1 = sumOfNumbers(array1);
    const sum2 = sumOfNumbers(array2);

    if (sum1 > sum2) {
        consoleLog(2.4, "The sum of the first array is larger.");
    } else if (sum2 > sum1) {
        consoleLog(2.4, "The sum of the second array is larger.");
    } else {
        consoleLog(2.4, "Both sums are equal.");
    }
};
compareSums(oddNumbers, evenNumbers);

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */
// First, ensure you have a container in your HTML to display the results.
// For example, <div id="arrayResults"></div>
function displayArrayResults() {
    // Create container div
    const arrayResultsContainer = document.createElement("div");
    arrayResultsContainer.id = "arrayResults";
    taskDiv.appendChild(arrayResultsContainer);

    // Display random numbers
    const randomNumbersDisplay = document.createElement("p");
    randomNumbersDisplay.textContent = `Random Numbers: ${randomNumbersArray.join(", ")}`;
    arrayResultsContainer.appendChild(randomNumbersDisplay);

    // Display odd and even numbers
    const oddNumbersDisplay = document.createElement("p");
    oddNumbersDisplay.textContent = `Odd Numbers: ${oddNumbers.join(", ")}`;
    arrayResultsContainer.appendChild(oddNumbersDisplay);

    const evenNumbersDisplay = document.createElement("p");
    evenNumbersDisplay.textContent = `Even Numbers: ${evenNumbers.join(", ")}`;
    arrayResultsContainer.appendChild(evenNumbersDisplay);

    // Display the largest numbers
    const largestOdd = findLargestNumber(oddNumbers);
    const largestEven = findLargestNumber(evenNumbers);
    const largestNumbersDisplay = document.createElement("p");
    largestNumbersDisplay.textContent = `Largest Odd Number: ${largestOdd}, Largest Even Number: ${largestEven}`;
    arrayResultsContainer.appendChild(largestNumbersDisplay);

    // Display sums
    const sumOdds = sumOfNumbers(oddNumbers);
    const sumEvens = sumOfNumbers(evenNumbers);
    const sumsDisplay = document.createElement("p");
    sumsDisplay.textContent = `Sum of Odd Numbers: ${sumOdds}, Sum of Even Numbers: ${sumEvens}`;
    arrayResultsContainer.appendChild(sumsDisplay);

    // Display which array has the larger sum
    const compareSumsDisplay = document.createElement("p");
    compareSumsDisplay.textContent = compareSumsText(oddNumbers, evenNumbers);
    arrayResultsContainer.appendChild(compareSumsDisplay);
}

function compareSumsText(oddNumbers, evenNumbers) {
    const sumOdds = sumOfNumbers(oddNumbers);
    const sumEvens = sumOfNumbers(evenNumbers);
    if (sumOdds > sumEvens) {
        return "Odd numbers have a larger total sum.";
    } else if (sumEvens > sumOdds) {
        return "Even numbers have a larger total sum.";
    } else {
        return "Both arrays have equal total sums.";
    }
}

displayArrayResults();
