let userName = prompt("Welcome, Enter your Name:");                                  //Get username
if (userName === null || userName === "" ) {                                         //Validate username, null for when user cancels and "" for empty string
    userName = "Guest";
}
alert(`Welcome to EatNow cafe, ${userName}!`);                                       //Use backtick when calling ${} in a string
let menuDishes = ["Grilled Chicken", "Chapati", "Pilau", "Beef Stew", "Fish"];       //Array menu
console.log("Full Menu");
menuDishes.forEach((dish, i) => {
    console.log(`${i + 1}. ${dish}`);                                                //ForEach loop to display menu
});
let newDish = prompt("Add New dish to menu:");                                       //User to Add new dish 
if (newDish) {
    menuDishes.push(newDish);                                                        //Add dish to array
    console.log("Thank you for your suggestion! Check updated menu:");
    menuDishes.forEach((dish, i) => {
        console.log(`${i + 1}. ${dish}`);                                            //Display new menu
    });
} else {
    console.log("No Valid Dish Added!");                                             // Message for blank                        
}
