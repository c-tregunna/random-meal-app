// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
// const customer = prompt('What is your name?');
const name = 'Chef Claire'; // Assign your name
const starter = ['Brushetta', 'Soup', 'Prawn Cocktail'];
const mainCourse = ['Steak and Chips', 'Tomato and Mozeralla Pasta', 'Fish Pie'];
const pudding =  ['Jelly and Ice Cream', 'Eton Mess', 'Chocolate Fondant']; // Add in some meals...

// HELPER FUNCTIONS


const getDay = () => {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    console.log(weekday);
    return weekday[day.getDay()];

};

const getRandomWeeklyMeals = () => {
    const randomStarter = Math.floor(Math.random() * starter.length);
    const randomMain = Math.floor(Math.random() * mainCourse.length);
    const randomPudding = Math.floor(Math.random() * pudding.length);
    console.log(starter[randomStarter]);
    console.log(mainCourse[randomMain]);
    console.log(pudding[randomPudding]);
};

getRandomWeeklyMeals();

const displayWeeklyMealPlan = () => {

};

const showPlan = () => {};

headline.textContent = getDay();
tagline.textContent = `Hey ${name}, click the button below to see your weekly meal planner, prepared by ${name}.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);


