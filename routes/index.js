const express = require('express');
const router = express.Router();
const bookRouter = require('./book');
const authRouter = require('./auth');
const path = require('path');

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.post('/', (req, res) => {
    res.json({data : "Hello World"});
})
router.use('/book', bookRouter);
router.use('/auth', authRouter);

router.all('/*',(req, res)=>{
    res.send('Page Not Found');
});


module.exports = router;