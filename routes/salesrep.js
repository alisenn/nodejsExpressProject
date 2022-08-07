const axios = require('axios');
const express = require("express");
const router = express.Router();


router.get('/', (req,resp) => {
    axios
        .get('http://localhost:3000/countries')
        .then(res => {
            var salesRep = new Map(); //region key, country number is value
            var result = {}
            var resArr = []
            for (var i=0; i<res.data.length; i++){
                if ( salesRep.get(res.data[i].region) === undefined){
                    salesRep.set(res.data[i].region, new Set())
                }else {
                    salesRep.get(res.data[i].region).add(res.data[i].name)
                }
            }
            salesRep.forEach((value, key) => {
                result['region'] = key
                result['minSalesReq'] = Math.ceil(value.size/7)
                result['maxSalesReq'] = Math.ceil(value.size/3)
                resArr.push( Object.assign({}, result) )
            })
           resp.json(resArr)

        })
        .catch(error => {
            resp.json({message: error})

        });
})

module.exports = router;