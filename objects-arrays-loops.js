/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

// const array1 = [1, 2, 3, 4, 5]
// const extraNumber = 6
// array1.push(extraNumber)
// console.log(array1)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

// const myDetails = {
//   myName: `Aneesah`,
//   mySurname: `Khan`,
//   myAge: 23,
//   myEmail: `aneesahalmask@gmail.com`
// }

// myDetails.myLocation = `Manchester, UK`
// console.log(myDetails)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent whether you have or not a driving license.
*/

// myDetails.hasDriversLicense = true
// console.log(myDetails)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

// delete myDetails.myAge
// console.log(myDetails)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

// const details2 = Object.assign({}, myDetails)
// details2.myName = `Eun-bin`
// details2.mySurname = `Park`
// details2.myEmail = `parkeunbin@gmail.com`
// console.log(myDetails === details2)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 51
let freeShipping = totalShoppingCart
let cartWithShipping = totalShoppingCart + 10
let total = totalShoppingCart > 50 ? freeShipping : cartWithShipping
console.log(total)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
