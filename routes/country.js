const express = require('express');
const router = express.Router();
const Country = require('../models/Countries');


router.get('/', async (req,res) => {
    try{
        const coutries = await Country.find();
        res.json(coutries);
    }catch (err){
        res.json({message:err});
    }
})

router.get('/:region', async (req,res) => {
    try{
        const coutries = await Country.find({region: req.params.region});
        res.json(coutries);
    }catch (err){
        res.json({message:err});
    }
})

module.exports = router;