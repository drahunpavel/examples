const {Router} = require('express');
const Course = require('../modals/course');
const router = Router();

router.get('/', async (req, res, next) => {

    const courses = await Course.find();

    res.render('courses', {
        title: 'All',
        isCourses: true,
        courses
    })
});

router.get('/:id/edit', async (req, res) => {

    const course = await Course.findById(req.params.id)

    if(!req.query.allow){
        return res.redirect('/'); //return ... функция прекращает выполнение и редиректится на главную страницу
    }

    res.render('course-edit', {
        title: `Edit course ${course.title}`,
        course
    })
});

router.get('/:id', async (req, res) => {
    // console.log('--', req.params)
    const course = await Course.findById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,
        course
    });
})

router.post('/edit', async (req, res) => {
    const { id} = req.body;
    delete req.body.id;
    await Course.findByIdAndUpdate(id, req.body); //передаем на апдейт нужный курс
    res.redirect('/courses');
})

router.post('/remove', async (req, res) => {
    try{
        await Course.deleteOne({
            _id: req.body.id,
        })
        res.redirect('/courses');
    }catch(err){
        console.log('--err', err)
    }
})

module.exports = router;