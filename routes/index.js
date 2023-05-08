const express = require('express')
const router = express.Router()

// Login Page
router.get('/', (req, res)=>{
    res.render('Welcome')
})

// Register Page
router.get('/register', (req, res)=>{
    res.render('register');
})

module.exports = router;
