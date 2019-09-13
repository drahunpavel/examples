const {Router} = require('express');
const router = Router();
const Card = require('../modals/card');
const Course = require('../modals/course');

router.post('/add', async (req, res) => {

    const course = await Course.getById(req.params.id);
    await Card.add(course);
    res.redirect('/card');
});

router.get('/', async (req, res) => {
    const card = await Card.fetch();

    res.render('card', {
        title: 'Shopping basket', 
        card
    })
});

module.exports = router;