// import { apiKey, abc } from './util.js';
// import { apiKey, abc as content } from './util.js';
// import * as util from './util.js';


// import apiKey from './util.js';

// console.log(util.apiKey);

// const userMessage = 'Hello World';

// userMessage = 'New Value';

// console.log(userMessage);

// console.log('Hello' + ' World');

// if (10 === 10) {
//     console.log('Hello' + ' World');
// }

// function createGreeting(userName, message = 'Hello') {
//     // console.log(userName);
//     // console.log(message);
//     return 'Hi I am ' + userName + '. ' + message;
// }

// // greet('Nihad', 'Hello');
// // greet('Max');

// const greeting1 = createGreeting('Nihad', 'Hello');
// const greeting2 = createGreeting('Max');

// console.log(greeting1);
// console.log(greeting2);

// export default (userName, message = 'Hello') => {
//     console.log(userName);
//     return 'Hi I am ' + userName + '. ' + message;
// }

// const user = {
//     name: 'Max',
//     age: '34',
//     greet() {
//         console.log('Hi');
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log('hi');
//     }
// }

// const user1 = new User('Max', 31);
// console.log(user1);
// user1.greet();

// const hobbies = ['Sports', 'Cooking', 'Reading'];
// console.log(hobbies[0]);

// hobbies.push('Working');
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === 'Sports');

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ['Max', 'Sch'];
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//     name: 'Max',
//     age: 32
// };

// console.log(userName);
// console.log(age);

// const hobbies = ['Sports', 'Cooking'];
// const user = {
//     name: 'Max',
//     age: 72
// };

// const newHobbies = ['Reading'];

// const mergeHobbies = [...hobbies, ...newHobbies];

// console.log(mergeHobbies);

// const extendedUser = {
//     ...user,
//     isAdmin: true
// }

// console.log(extendedUser);

// const pass = prompt('Your Pass');

// if (pass === 'Hello') {
//     console.log('Ok');
// } else {
//     console.log('Not ok');
// }

// const hobbies = ['Sports', 'Cooking'];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector('ul');
// list.remove();

// function handleTimeout() {
//     console.log('Time Out');
// }

// const handleTimeout2 = () => {
//     console.log('Time Out...Again');
// };

// setTimeout(handleTimeout, 1000);
// setTimeout(handleTimeout2, 1000);
// setTimeout(() => {
//     console.log('Time Out...again');
// }, 1000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log('hi'));

// function init() {
//     function greet() {
//         console.log('hi');
//     }

//     greet();
// }

// init();

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Working');
// console.log(hobbies);