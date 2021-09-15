const express = require('express');

const app = express ();

const port = 5000;


app.get('/', (req, res) => {
    res.send('hey from server')
})


app.listen(port, (err)=> {
    if(err) throw new Error('Something didnot work:/ ...')
    console.log(`Sever is runing great on port: ${port}`)
})