const {Router} = require('express');

const router = Router();

router.get('/', (req, res, next) => { //next продолжает выполнять другие методы
    // res.status(200) идет по умолчанию
    // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render('index', {
        title: 'Home page',
        isHome: true
    })
})

module.exports = router;