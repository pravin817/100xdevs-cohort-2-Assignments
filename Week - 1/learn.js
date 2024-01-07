// let arr = [1,2,3,4,5];

// console.log(arr);
// console.log(arr.length);

// arr.push(20);
// arr.pop();
// arr.shift();
// arr.unshift(20);

// let arr2 = [6,7,8,9,10];
// let arr3 = arr.concat(arr2);
// console.log(arr3);

// arr.push([120,30])
// console.log(arr);

// let arr = [10,24,3,4,15];

// console.log(arr);

// arr.forEach((arr,index)=>{
//     console.log(arr,index);
// })

// let arr2 = arr.filter((item)=>{
//     return item > 2;
// })

// console.log(arr2);

// console.log(arr.sort());

// function log1(){
//     console.log("Hello World 1");
// }

// function log2(){
//     console.log("Hello World 2")    ;
// }

// function logWhatsPresent(fun){
//     fun();
// }

// logWhatsPresent(log1);

// class Animal{
//     constructor(name,legCount,speaks){
//         this.name = name;
//         this.legCount = legCount,
//         this.speaks = speaks;
//     }

//     static tellMe(){
//         console.log("I am an Animal");
//     }

//     speak(){
//         console.log(`Hi there, I am ${this.name} and I speak ${this.speaks}`);
//     }
// }

// // Now create the object of the class Animal

// let dog = new Animal("Dog",4,"Bhow Bhow");
// let cat = new Animal("Cat",4,"Meow Meow");

// // call function on object
// dog.speak();
// cat.speak();

// // console.log(dog);
// // console.log(cat.speak());

// Animal.tellMe();

// cat.tellMe(); // This will throw error as tellMe is a static function and can only be called on class itself and not on object of the class

// const currentDate = new Date();
// console.log("Current Date : ",currentDate);

// console.log("Date : ",currentDate.getDate());
// console.log("Month : ",currentDate.getMonth()+1);
// console.log("Year : ",currentDate.getFullYear());
// console.log("Hours : ",currentDate.getHours());
// console.log("Minutes : ",currentDate.getMinutes());
// console.log("Seconds : ",currentDate.getSeconds());
// console.log("Time in milliseconds since 1970 : ",currentDate.getTime());

// currentDate.setFullYear(2022);
// console.log("After setFullYear:", currentDate);

//   currentDate.setMonth(5); // Setting month to June (zero-indexed)
//   console.log("After setMonth:", currentDate);

//     const newDate = new Date(2023, 8, 15); // Creating a new date
//     console.log("New Date:", newDate);

// const user = {
//     name : "John",
//     age : 30,
//     address : {
//         city : "Delhi",
//         state : "Delhi"
//     },
//     hobbies : ["Reading","Coding","Playing"],
//     isMarried : false,
//     sayHi : function(){
//         console.log("Hi there");
//     }
// }

// console.log(user);

// console.log("Original JSON String:", user);

// let parsedObject = JSON.stringify(user);

// console.log("After JSON.parse():", parsedObject);

// JSON.parse ---> It is used to convert the JSON string to JavaScript object
// JSON.stringify ---> It is used to convert the JavaScript object to JSON string

// const value = 123.3444;
// console.log(value);

// console.log(Math.round(value));
// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.random());
// console.log(Math.max(5,10,15));
// console.log(Math.min(5,10,15));
// console.log(Math.pow(value,2));
// console.log(Math.sqrt(value));

// const obj = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3",
// };


// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty("key1"));
// console.log(Object.assign({},obj,{key4:"value4"}));
// console.log(obj)
