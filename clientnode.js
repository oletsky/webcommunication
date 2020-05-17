"use strict";
//Client of simple interaction via fetch
const fetch = require('node-fetch');
let url = 'http://localhost:8888';

const getData = async url => {
    try {
        const response = await fetch(url);
        let res = await response.text();
        return res;
    } catch (error) {
        return error;
    }

};


getData(url).then(result=>console.log(result),
    error=>console.log(error));