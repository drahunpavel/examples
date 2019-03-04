const http = require("http");
const greeting=require('./greeting');
const User=require('./user');
const welcome=require('./welcome/index');

const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;
console.log('userName',userName);


// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));
global.name = "Paul";
global.console.log(date);
console.log(greeting.getMessage());


let paul=new User('Paul', 24);
paul.sayHi();


welcome.getMorningMessage();
welcome.getEveningMessage();
console.log('------------------------------------------------')