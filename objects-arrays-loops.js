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

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent whether you have or not a driving license.
*/

// myDetails.hasDriversLicense = true

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

// delete myDetails.myAge

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

// let totalShoppingCart = 51
// let freeShipping = totalShoppingCart
// let cartWithShipping = totalShoppingCart + 10
// let total = totalShoppingCart > 50 ? freeShipping : cartWithShipping
// console.log(total)

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

// let totalShoppingCart = 51
// let discountedShoppingCart = totalShoppingCart * 0.8
// let freeShipping = discountedShoppingCart
// let cartWithShipping = discountedShoppingCart + 10
// let total = totalShoppingCart > 50 ? freeShipping : cartWithShipping
// console.log(total)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

// const car1 = {
//   brand: "MG",
//   model: "MG4 EV",
//   licensePlate: "PE31 RUK"
// }

// const car2 = Object.assign({}, car1)
// car2.licensePlate = "DK19 5HG"

// const car3 = Object.assign({}, car1)
// car3.licensePlate = "AU17 8JK"

// const car4 = Object.assign({}, car1)
// car4.licensePlate = "PI19 7EV"

// const car5 = Object.assign({}, car1)
// car5.licensePlate = "AN17 8AH"

// const car6 = Object.assign({}, car1)
// car6.licensePlate = "LK7 8EN"

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

// let carsForRent = [car1, car2, car3, car4, car5, car6]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

// carsForRent.splice(0, 1)
// carsForRent.pop()

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
// console.log(typeof car1)
// console.log(typeof "licensePlate")
// console.log(typeof "brand")

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

// let carsForSale = []
// carsForSale.push(car1, car2, car3)
// console.log(carsForSale)

// totalCars = carsForSale.length + carsForRent.length
// console.log(totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

// for (let i = 0; i < carsForSale.length; i++) {
//   console.log(carsForSale[i])
// }
