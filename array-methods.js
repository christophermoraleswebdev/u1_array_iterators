// Array Iterator Methods

// .forEach()
// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach(function(friend) {
//       console.log(`I have a friend named ${friend}`);
// });

// console shows the following: 
// I have a friend named Melissa
// I have a friend named Marc
// I have a friend named Andrew
// I have a friend named Nick






// .map() creates a new array, should always be the same length as the source array.

// .map() Example # 1
// const nums = [1, 2, 3]
// const squared = nums.map((num) => {
//       return num * num; 
// }); 

// console.log(squared)
// console shows the following: 
// [ 1, 4, 9 ]
// .map() Example # 2
// const people = [
//       {name: 'Fred', town: 'Bedrock'},
//       {name: 'Susan', town: 'Miami'},
//       {name: 'John', town: 'Arcadia'}
//     ];
    
//     const els = people.map((person, idx) => {
//       const el = document.createElement('div');
//       el.innerHTML = `${person.name} <span>(${person.town})</span>`;
//       // The new array will contain whatever
//       // is returned from the callback 
//       return el;
//     });
    
//     // Append the <div>s to the end of the <body>
//     els.forEach(el => document.body.append(el));




//filter() -> purpose is to select certain elements from a source array

// const nums = [100, 2, 5, 42, 99, 103]
// const odds = nums.filter((num) => num % 2); 

// console.log(odds)

// console shows the following: 
// [5, 99, 103 ]




// // find() -> Purpose is to find an element within an array. 
// const cars = [
//       {color: 'red', make: 'BMW', year: 2001},
//       {color: 'white', make: 'Toyota', year: 2013},
//       {color: 'black', make: 'Ford', year: 2014},
//       {color: 'white', make: 'Tesla', year: 2016}
//     ];
    
//     const firstWhiteCar = cars.find((car) => car.color === 'white'); 
//     // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
    
//     const missingCar = cars.find((car) => car.color === 'blue');
//     // missingCar -> undefined
//     console.log(missingCar)
//     console.log(firstWhiteCar)





// findIndex() -> like find() but returns the index 

// const cars = [
//       {color: 'red', make: 'BMW', year: 2001},
//       {color: 'white', make: 'Toyota', year: 2013},
//       {color: 'black', make: 'Ford', year: 2014},
//       {color: 'white', make: 'Tesla', year: 2016}
//     ];
    
//     const indexFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015); 
//     console.log(indexFirstCarNewerThan2015)
// //     3 was logged to the console

//     const missingCarIdx = cars.findIndex((car) => car.year > 2020); 
//     console.log(missingCarIdx)
//     -1 was logged to console since there weren't any cars with a year greater than 2020. 





// some() -> Purpose is to check if an array has at least one element that meets a certain condition. 

// const cars = [
//       {color: 'red', make: 'BMW', year: 2001},
//       {color: 'white', make: 'Toyota', year: 2013},
//       {color: 'black', make: 'Ford', year: 2014},
//       {color: 'white', make: 'Tesla', year: 2016}
//     ];
    
//     const isFord = cars.some((car) => car.make === 'Ford')
//     // hasFord -> true
// console.log(isFord)








// every() -> Purpose is to check if every element in an array meets a certain condition

// const cars = [
//       {color: 'red', make: 'BMW', year: 2001},
//       {color: 'white', make: 'Toyota', year: 2013},
//       {color: 'black', make: 'Ford', year: 2014},
//       {color: 'white', make: 'Tesla', year: 2016}
//     ];
    
//     const everyCarIsNewerThan2000 = cars.every((car) => car.year > 2000);
//     // everyCarIsNewerThan2000 -> true







// reduce() -> purpose is to reduce an array into a single value or thing (such as an object). 
// const nums = [25, 6, 100, 3];

// // The callback returns the value of
// // acc (accumulator) for the next iteration.
// // The second argument, `0`, is the value
// // of acc on the first iteration.
// const sum = nums.reduce((acc, num) => acc + num, 0);

// // The reduce method returns whatever the callback
// // returns for the last iteration.
// // sum equals 134 (the final value returned)




// const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
// const tally = votes.reduce((acc, vote) => {
//   // Assign 1 if first time seeing a certain "type" of vote
//   // otherwise increase count by 1
//   acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
//   return acc;
// }, {});  // Note the initial value is an empty object

// // tally -> {"No": 2, "Yes": 3}