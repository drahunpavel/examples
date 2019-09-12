const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express(); //анадог обхекта сервера

//роутеры
const homeRouter = require('./routes/home')
const addRouter = require('./routes/add')
const coursesRouter = require('./routes/courses')

//конфигураиця exphbs
const hbs = exphbs.create({
    defaultLayout: 'main', //файл с папки layout
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);//подключение движка к экспрессу
app.set('view engine', 'hbs') //начинаем использовать
app.set('views', 'views')//вторая views - это папка с html

app.use(express.static('public')); //делаем папку статичной

// app.use(homeRouter);
// app.use(addRouter);
// app.use(coursesRouter);
app.use('/',homeRouter);
app.use('/add',addRouter);
app.use('/courses',coursesRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} =)`)
});