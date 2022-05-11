let HTTPS = require('https');
const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url,callback) {
    HTTPS.get(url, (res) => {
        res.setEncoding('utf-8');
        if(res.statusMessage === 'OK'){
            if(res.statusCode === 200){
                let body = '';
                res.on('data', (data) => {
                    body += data;
                });
                res.on('end', () => {
                    callback(null, JSON.parse(body));
                });
            } else {
                const err = new Error('Request error on: '+ url);
                return callback(err, null);
            }
        }
    })
    callback;
}

fetchData(API, function (err1, data1) {
    if(err1) return console.error(err1);
    fetchData(API + data1.results[0].id, function(err2, data2) {
        if (err2) return console.error(err2);
        fetchData(data2.origin.url,function(err3, data3) {
            if(err3) return console.error(err3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})