let https = require ('https');
const express = require('express');

let app = express();

let subscriptionKey = '03ed188eda854fe4b76e21685543d7c1';
let host = 'api.bing.microsoft.com';
let path = '/v7.0/search';

let mkt = 'en-US';
let q = 'Car insurnace';
let count = 3;


let query = '?mkt=' + mkt + '&q=' + encodeURI(q) + '&count=' + count;

let response_handler = function (response, res) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on ('end', function () {
        let json = JSON.stringify(JSON.parse(body), null, '  ');
        res.send(json); // Send the JSON response to the client
    });
};

let Search = function (res) { // Pass the `res` object to the function
    let request_params = {
        method : 'GET',
        hostname : host,
        path : path + query,
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        }
    };
    let req = https.request (request_params, function(response) {
        response_handler(response, res); // Pass the `res` object to the response_handler function
    });
    req.end ();
};

app.use(express.static('public'));



app.get('/search', (req, res) => {
    Search(res);
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});