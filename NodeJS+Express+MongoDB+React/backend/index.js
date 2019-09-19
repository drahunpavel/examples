import mongoose from 'mongoose';
const express = require('express');
const bodyParser = require('body-parser');

//запуск сервера
const app = express();

//модели
// import PostModel from './models/post';

//контроллеры
import PostController from './controllers/PostController';
//напрямую к методам класса обратиться нельщя
//поэтому создается экземпляр класса  и после этого можно обратиться к методам
const Post = new PostController();

//парсеры
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


//получение всех записей
app.get('/posts', Post.index);
//получение конкретной записи
app.get('/posts/:id', Post.read);
//добавление записей в бд
app.post('/posts', Post.create);
//удаление записей
app.delete('/posts/:id', Post.delete);
//обновление записей
app.put('/posts/:id/edit', Post.update);


const PORT = process.env.PORT || 3000;

async function startServer(){
    try{
        //подключение к БД
        const url = 'mongodb+srv://paul_admin:UcMIa2iY3I09WhQg@cluster0-gk8xa.mongodb.net/testDB'
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        //прослушивание приложения на порту
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} YEAH ! ! !`)
        });
    }catch(err){
        console.log('-error connect', err)
    };
};

startServer();