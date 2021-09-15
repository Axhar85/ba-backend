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


app.listen(port, (err)=> {
    if(err) throw new Error('Something didnot work:/ ...')
    console.log(`Sever is runing great on port: ${port}`)
})