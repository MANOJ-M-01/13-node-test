const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const movies = require('./movies');
const fs = require('fs');
app.use(express.json());

app.use('/abc', movies);


app.get('/', (req,res) => {
    res.send('Welcome sto Daily Code Buffer in Heroku Auto Deployment!!');
})


const __dirname=fs.realpathSync('.');
app.get('*', (req, res)=>{
    res.sendFile(__dirname + "/404.html")
  });








const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
