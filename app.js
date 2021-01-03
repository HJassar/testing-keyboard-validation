const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(cors())

// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

let waitTime = 2000 + Math.random() * 5000;
app.use('*', (req, res, next) => {
    waitTime = 2000 + Math.random() * 5000;
    console.log(waitTime)
    setTimeout(() => {
        next();
    }, waitTime);
})

app.post('/', (req, res) => {
    res.send(req.body.text)
})

app.listen(3000, () => {
    console.log('listening to the validator @ 3000')
})