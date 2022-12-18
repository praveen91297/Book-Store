const express = require('express');

const app = express();

const createDatabase = require('./database');

const PORT = 3000;

app.use(express.json());

// CORS

const connection = createDatabase();

app.use(express.urlencoded());

app.get('/api', (req, res) => {
    const query = 'Select * from Users';
    connection.query(query, (err, result) => {
        if(err) {
            console.log(err);
            res.send({data: err});
        } else {
            console.log(result);
            res.send({data: result});
        }
    });
});


app.post('/api', (req, res) => {
    console.log(req.body);

    res.send('Everything is Okay');
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`My Server is start at port ${PORT}`);
    }
})