const {Router} = require('express');
const Course = require('../modals/course');
const router = Router();

router.get('/', async (req, res, next) => {

    const courses = await Course.getAll();

    res.render('courses', {
        title: 'All',
        isCourses: true,
        courses
    })
});

router.get('/:id/edit', async (req, res) => {

    const course = await Course.getById(req.params.id)

    if(!req.query.allow){
        return res.redirect('/'); //return ... функция прекращает выполнение и редиректится на главную страницу
    }

    res.render('course-edit', {
        title: `Edit course ${course.title}`,
        course
    })
});

router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,
        course
    });
})

router.post('/edit', async (req, res) => {


    await Course.update(req.body); //передаем на апдейт нужный курс
    res.redirect('/courses');
})

module.exports = router;