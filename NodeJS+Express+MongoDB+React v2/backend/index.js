const express = require('express');
const bodyParser = require('body-parser');

//запуск сервера
const app = express();

//получение всех записей
app.get('/posts', Post.index);
//получение конкретной записи
app.get('/posts/:id', Post.read);
//добавление записей в бд
app.post('/posts', Post.create);

async function startServer(){
    try{
        //подключение к БД
        // const url = 'mongodb+srv://paul_admin:UcMIa2iY3I09WhQg@cluster0-gk8xa.mongodb.net/testDB'
        // await mongoose.connect(url, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });

        //прослушивание приложения на порту
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} YEAH ! ! !`)
        });
    }catch(err){
        console.log('-error connect', err)
    };
};

startServer();