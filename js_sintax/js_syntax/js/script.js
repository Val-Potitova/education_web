// SYNTAX

// console.log('JS');
// console.log('fgf')
// console.log('JS')
// console.log('fr')

// console.log('rg') console.log('gtr')
// error

// console.log('dg');
// console.log('fkgn');



// CONST

// let colorEyes;

// let user;
// let userName;
// userName = 'Vasya';
// user = userName;
// console.log(user);

// let user = 'dg' let age = 36
// error

// let myage = 36;
// const BLOCK_SIZE = 14 + 50;
// const BLOCK_HEIGHT = 100;
// if (true) {
//     var size = 15;
// }
// console.log(size);



// DATA TYPE

// let userAge = 36;
// let userInfo = 'Freelance ${userAge}';
// console.log(userInfo);
// // fail

// let userHeight = 145 / 0;
// console.log(userHeight);
// // Infinity

// let userName;
// console.log(typeof userName);
// // undefined

// let userSize = "45" / "8";
// console.log(typeof userSize);
// // number



// OPERATORS

// console.log('35' + - "22");
// // 35-22

// console.log('35' * "22");
// // 770

// // console.log('558' > 22++);
// // error

// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);
// // 0

// console.log(!false && 11 || 18 && !'');
// // 11

// let name = 0;
// console.log(name && "No name");
// // 0



// // IF

// if (1 === "1"){
//     console.log('true');
// } else {
//     console.log('false');
// }
// // false

// if (5 == "5") {
//     console.log('true');
// } else {
//     console.log('false');
// }
// // true

// let message = (92 > '11' && 58 < 100) ? 'true' : "false";
// console.log(message)
// // true

// if (0) {
//     console.log('f')
// } else if (" ") {
//     console.log('true')
// }
// // true



// FOR, WHILE

// let num = 1;
// while (num < 6) {
//     console.log(num);
//     num++;
// }
// for (num = 1; num <=5; num++) {
//     console.log(num);
// }

// let num = 8;
// while (num) {
//     console.log(num);
//     num--
// }
// // last result 1

// for (let num = 0; num < 3; num++) {
//     console.log(`Value: ${num}`);
// }
// let num = 0;
// while (num < 3) {
//     console.log(`Value: ${num}`);
//     num++
// }

// FirstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         console.log(size);
//         if (size === 1) break FirstFor;
//     }
// }



// FUNCTION

// function showName() {
//     console.log('Vasya!');
// }
// setTimeout(showName, 0);
// console.log('Kolya!');
// // Kolya, Vasya

// showMessage();
// function showMessage() {
//     console.log('Message');
// }
// // ok

// showMessage();
// let showMessage = function () {
//     console.log('Message');
// };
// // fail

// 'use strict'
// if (2 > 1) {
//     function showMessage() {
//         console.log('Message')
//     }
// }
// showMessage();
// error

// let showMessage;
// if (2 > 1) {
//     showMessage = function () {
//         console.log('Message');
//     };
// }
// showMessage();



// OBJECT

// const userInfo = {
//     name: "Vasya",
//     age: 30,
// }

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     "58": 'Value'
// }
// console.log(userInfo[58]);
// // Value

// let userInfo = {
//     name: "Vasya",
//      age: 30,
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age);
// // 45

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     shoInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// user.shoInfo();
// Vasya

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }
// // Vasya \n 30

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "SPb"
//     }
// }
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }
// // SPb

// const userInfo = {
//     name: "Vasya",
//     age: 30,
//     "likes js": true,
// }
// // console.log(userInfo."likes js");
// console.log(userInfo["likes js"]);

// let userInfo = {};
// userInfo.name = "Vasya";
// userInfo.age = 30;
// console.log(userInfo);
// userInfo.name = "Lena";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);



// NUMBER

// let numOne = Math.round(1.005 * 100) / 100;
// console.log(numOne);
// // 1
// numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
// console.log(numOne);
// // 1.01

// let value = "135.58px";
// console.log(parseFloat(value));
// // 135.58

// let value = 58 + "Freelance";
// if (isNaN(value)) {
//     console.log('Result NaN');
// }

// console.log(Math.max(10,58,39,-150,0));
// // 58

// console.log(Math.floor(58.858));
// // 58



// STRING

// let brb = "Barbie";
// // let text = 'Hi, ${brb}';
// let text = `Hi, ${brb}!`;
// console.log(text);

// let text = 'freelance'
// console.log(text[6]);

// let text = 123 + "456";
// console.log(text);
// // 123456

// let text = 'tutu';
// console.log(text.toUpperCase());

// let text = 'trututu';
// console.log(text.slice(3, 5));
// // tu

// let text = 'freelance';
// console.log(text.includes('lan', 5));
// // false



// ARRAY

// let arr = ['1', '2', '3',];
// let newArr = arr;
// newArr.push('4');
// console.log(arr.length);
// // 4
// console.log(arr);

// let users = ["Todd", "Jon",];
// users.push("Ann");
// console.log(users);
// users[users.indexOf("Jon")] = "Pit";
// console.log(users);
// console.log(users.shift());
// users.unshift("Mary", "Georg");
// console.log(users);

// let arr = ["Todd", "Jon", "Pit"];
// let delName = arr.splice(1, 1);
// console.log(delName);

// let str = 'Dan,Pit,Jon';
// let arr = str.split(',');
// console.log(arr);

// let arr = [9, 2, 8];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//     console.log(previousValue);
// });
// // 9
// // undefined




