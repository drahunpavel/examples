const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express(); //анадог обхекта сервера

//конфигураиця exphbs
const hbs = exphbs.create({
    defaultLayout: 'main', //файл с папки layout
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);//подключение движка к экспрессу
app.set('view engine', 'hbs') //начинаем использовать
app.set('views', 'views')//вторая views - это папка с html

app.get('/', (req, res, next) => { //next продолжает выполнять другие методы
    // res.status(200) идет по умолчанию
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render('index')
})
app.get('/about.html', (req, res, next) => { //next продолжает выполнять другие методы
    // res.sendFile(path.join(__dirname, 'views', 'about.html'));
    res.render('about')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} =)`)
});