const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express(); //анадог обхекта сервера
const mongoose = require('mongoose');

//роутеры
const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const coursesRouter = require('./routes/courses');
const cardRouter = require('./routes/card');

//конфигураиця exphbs
const hbs = exphbs.create({
    defaultLayout: 'main', //файл с папки layout
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);//подключение движка к экспрессу
app.set('view engine', 'hbs') //начинаем использовать
app.set('views', 'views')//вторая views - это папка с html

app.use(express.static(path.join(__dirname, 'public'))); //делаем папку статичной

app.use(express.urlencoded({extended: true})) //что-то для форм

// app.use(homeRouter);
// app.use(addRouter);
// app.use(coursesRouter);
app.use('/',homeRouter);
app.use('/add',addRouter);
app.use('/courses',coursesRouter);
app.use('/card', cardRouter);

const PORT = process.env.PORT || 3000;

const user = 'Admin';
// const password = 'p4pdesz2vd3tb9tL';



const user1 = 'paul_admin'
const psw = 'UcMIa2iY3I09WhQg';
const url = 'mongodb+srv://paul_admin:UcMIa2iY3I09WhQg@cluster0-gk8xa.mongodb.net/shop'

// UcMIa2iY3I09WhQg
//делается асинковая функция только лишь для того, чтобы обернуть все в await, чтобы 
//проще работалось с промисами

async function startServer(){
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} YEAH!!!!`)
        });
    }catch(err){
        console.error('-err', err)
    };
};

startServer();

