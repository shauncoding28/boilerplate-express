require('dotenv').config();
let express = require('express');
let app = express();
const path = require('path');


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

console.log('Hello World');

app.use('/public',
    express.static(path.join(__dirname, 'public'))
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? 'Hello json'.toUpperCase() : 'Hello json';
    res.json({ "message": message });
});





































module.exports = app;
