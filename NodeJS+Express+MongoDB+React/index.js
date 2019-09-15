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

//удаление записей
app.delete('/posts/:id', (req, res) => {
    PostModel.remove({
        _id: req.params.id
    }).then(post => {
        //проверяем, что после ввыполнения звпросов запись была удалена
        //те запись была возращена
        if(post){
            res.json({status: 'deleted'})
        }else{
            res.json({status: 'error deleted'})
        }
    })
});

//обновление записей
app.put('/posts/:id', (req, res) => {
    PostModel.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        err => {
            if(err){
                res.send(err)
            }

            res.json({status: 'update'})
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