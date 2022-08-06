const axios = require('axios');
const express = require("express");
const router = express.Router();

class SalesRep {
    static getRoutes(container){

        router.get('/', (req,res) => {
            axios
                .get('http://localhost:3000/countries')
                .then(res => {
                    console.log(`statusCode: ${res.status}`);
                    console.log(res);
                    return res
                })
                .catch(error => {
                    console.error(error);
                });
        })
        return router;
    }

    constructor(req, res, salesRepService) {
        this._salesRepService = salesRepService;
    }
}


module.exports = router;