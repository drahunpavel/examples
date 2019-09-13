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
})

module.exports = router;