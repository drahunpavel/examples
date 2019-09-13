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
    console.log(req.body);

    const course = new Course(req.body.title, req.body.price, req.body.img)

    await course.save();
    res.redirect('/courses'); //редирект на страницу курсов после отправленной формы
})

module.exports = router;