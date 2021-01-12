// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
// const customer = prompt('What is your name?');

// const meals = [
//     ['Brushetta', 'Soup', 'Prawn Cocktail', 'Pate'],
//     ['Steak and Chips', 'Tomato and Mozeralla Pasta', 'Fish Pie'],
//     ['Jelly and Ice Cream', 'Eton Mess', 'Chocolate Fondant'],
//     ['Juice', 'Cola', 'Water'],
// ];
const starters = ['Brushetta', 'Soup', 'Prawn Cocktail'];
const mainCourse = ['Steak and Chips', 'Tomato and Mozeralla Pasta', 'Fish Pie'];
const puddings =  ['Jelly and Ice Cream', 'Eton Mess', 'Chocolate Fondant']; // Add in some meals...

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
    // console.log(weekday);
    return weekday[day.getDay()];

};


const getRandomWeeklyMeals = () => {
    let starter = starters[Math.floor(Math.random() * starters.length)];
    console.log(starter);
    let main = mainCourse[Math.floor(Math.random() * mainCourse.length)];
    console.log(main);
    let pudding = puddings[Math.floor(Math.random() * puddings.length)];
    console.log(pudding);
    // meals.forEach(meal => {
    //     const randomDishes = Math.floor(Math.random() * meals.length);
    //     // .toString().slice(0, 3)
    //     console.log(randomDishes);
    // })

};

getRandomWeeklyMeals();

const displayWeeklyMealPlan = () => {

};

const showPlan = () => {
    startButton.classList.add('hidden');
    headline.classList.add('slideUp');
    tagline.classList.add('slideUp');
    planDiv.classList.remove('hidden');

};

headline.textContent = getDay();
// tagline.textContent = `Hey ${customer}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);




