let express = require('express');
let app = express();
const path = require('path');


console.log('Hello World');

app.use('/public',
    express.static(path.join(__dirname, 'public'))
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
    const jsonObj = { "message": "Hello json" };
    res.json(jsonObj);
});



































module.exports = app;
