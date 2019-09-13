const {Router} = require('express');
const router = Router();
const Card = require('../modals/card');
const Course = require('../modals/course');

router.post('/add', async (req, res) => { //принимаем ид продукта, который нужно добавить в корзину
    console.log('=========', req.params.id)
    const course = await Course.getById(req.body.id);
    
    await Card.add(course);
    res.redirect('/card');
});

router.get('/', async (req, res) => {
    const card = await Card.fetch();

    res.render('card', {
        title: 'Shopping basket', 
        courses: card.courses,
        price: card.price,
        isCard: true
    })
});

//! метод удаления

router.delete('/remove/:id', async (req, res) => {
    const card = await Card.remove(req.params.id) //params - потому что хранится ид в адресной строке

    res.status(200).json(card);
})

module.exports = router;