import mongoose from 'mongoose';
const express = require('express');
const bodyParser = require('body-parser');

//запуск сервера
const app = express();

//модели
import PostModel from './models/post';

//парсеры
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.get('/', async (req, res) => {
//     return res.send(`<h1>Hello</h1>`);
// });

// app.get('/posts', async (req, res) => {
//     return res.send(posts);
// });

// //отображаю на сранице нужный id
// app.get('/:id', (req, res) => {
//     const id = req.params.id; //получаю id, который передаем
    
//     return res.send([posts[id]]);
// });

// app.post('/posts', (req, res) => {
//     const data = req.body;
//     console.log('--data', data);
//     posts.push(data);

//     return res.send(posts); //ретурнить обятаельно нужно, чтобы запросы не уходили в бесконечность
// });

//добавление записей в бд
app.post('/posts', (req, res) => {
    const data = req.body;
    console.log('--data', data);

    // создаем экземпляр модели и указываем тестовые данные
    const post = new PostModel({
        title: data.title,
        text: data.text
    });

    post.save().then(() => {
        res.send({status: 200})
        console.log('Запись сохранена!', data.title, data.text)
    });
});

//получение всех записией
app.get('/posts', (req, res) => {
    PostModel.find().then((err, posts) => { //find без параметров - получаем все записи
        if(err){
            res.send(err)
        }

        res.json(posts);
    })
});

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