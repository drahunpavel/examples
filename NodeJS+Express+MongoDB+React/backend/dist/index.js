'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const PostSchema = require('./models/post');
// import result from './models/post';

//модели
// const User = require('./modals/user');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// const posts = [
//     {
//         title: 'Hello world1',
//         text: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах'
//     },
//     {
//         title: 'Hello world2',
//         text: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах'
//     },
//     {
//         title: 'Hello world3',
//         text: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах'
//     },
//     {
//         title: 'Hello world4',
//         text: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах'
//     },
//     {
//         title: 'Hello world5',
//         text: 'Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах'
//     }
// ];

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

var url = 'mongodb+srv://paul_admin:UcMIa2iY3I09WhQg@cluster0-gk8xa.mongodb.net/testDB';

// app.listen(3000, async () => {


//     // mongoose.connect(url, {useNewUrlParser: true});

//     // const Cat = mongoose.model('Cat', { name: String });

//     // const kitty = new Cat({ name: 'Zildjian' });
//     // kitty.save().then(() => console.log('meow'));

// const arr = [1, 2, 4, 5, 3];
// const result = arr.map(value => value * 2);

console.log('--result');

//     console.log('YEAH ! ! !');
// });

// mongoose.connect(url, {useNewUrlParser: true});

// // создаем экземпляр модели и указываем тестовые данные
// const post = new Post({
//     title: 'первая запись',
//     text: 'Hello world'
// });

// post.save().then(() => {
//     console.log('Запись сохранена!')
// });