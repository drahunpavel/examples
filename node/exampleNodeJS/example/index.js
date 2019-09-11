// const userObj = require('./user');
// console.log('--userObj', userObj.user);
// userObj.sayHi();

// (function(require, modulem exports, __filename, __dirname){
// })(); //так выглядит любой экспорт подуля под капотом

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.write('<h1>Hello from node js</h1>'); //отдаем на страницу
    res.write('<h1>Hello from node js</h1>'); //отдаем на страницу
    res.write('<h1>Hello from node js</h1>'); //отдаем на страницу
    //res.end();
    res.end(`<div style='background: red'>test</div>`); //зконец ответа
});

server.listen(3000, () => {
    console.log('Server is starting')
})