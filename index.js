const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:'*'
}));


app.get('/', (req, res) => {res.send({abc : '123'})})

const port = 5000;
app.listen(port);
