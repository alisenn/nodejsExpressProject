const express = require('express');

const router = express.Router();

//Routes
router.get('/', (req,res) => {
    res.send('hi babe')
})

module.exports = router;