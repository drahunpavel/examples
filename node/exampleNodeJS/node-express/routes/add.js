const {Router} = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
});

router.post('/', (req, res) => {
   console.log(req.body);
   
   res.redirect('/courses'); //редирект на страницу курсов после отправленной формы
})

module.exports = router;