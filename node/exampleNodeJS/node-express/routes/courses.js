const {Router} = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.render('courses', {
        title: 'All',
        isCourses: true
    })
})

module.exports = router;