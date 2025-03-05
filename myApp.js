require('dotenv').config();
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
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase();
        //console.log('yes')
    }

    //console.log('no');
    res.json({ "message": message });
});




































module.exports = app;
