const express = require('express');
const connection = require('./conf');
const app = express ();

const port = 5000;

connection.connect((err) => {
    if(err) {
        console.error(`Error trying to reach the DB. Error: ${err.stack}`)
        return;
    }
    console.log('We did it! Connection to the DB is created!')
})

app.get('/', (req, res) => {
    res.send('hey from server')
})

app.get('/students', (req, res) => {
    connection.query('SELECT * FROM student',(err, results) => {
            if(err) {
                res.status(500).send('Server error, could not fetch data from students')
            }
            else {
                res.json(results)
            }
    })
})


app.listen(port, (err)=> {
    if(err) throw new Error('Something didnot work:/ ...')
    console.log(`Sever is runing great on port: ${port}`)
})