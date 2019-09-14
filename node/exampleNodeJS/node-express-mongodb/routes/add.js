const { Router } = require('express');
const Course = require('../modals/course');
const router = Router();

router.get('/', (req, res, next) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
});

router.post('/', async (req, res) => {
    // const course = new Course(req.body.title, req.body.price, req.body.img)

    //в модель Course передаю все параметры, которые исползую
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img
    });

    try{
        await course.save();
        res.redirect('/courses'); //редирект на страницу курсов после отправленной формы
    }catch(err){
        console.log('--err', err)
    };
});

module.exports = router;