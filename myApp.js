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

const addCurrentTime = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

app.get('/now', addCurrentTime, (req, res) => {
    res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
    const word = req.params.word;
    res.json({ echo: word });
});

app.route('/name').get((req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;

    const fullName = `${firstName} ${lastName}`;

    res.json({ name: fullName });
})





































module.exports = app;
