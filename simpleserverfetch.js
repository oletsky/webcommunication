"use strict";
const fetch = require('node-fetch');
let url = 'https://www.ukr.net';

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