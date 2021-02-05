const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const movies = require('./movies');
const mysql = require('mysql');

app.use(express.json());

app.use('/abc', movies);


app.get('/', (req,res) => {
    res.send('Welcome sto Daily Code Buffer in Heroku Auto Deployment!!');
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + "/404.html")
  });


var con = mysql.createConnection({
    host: "b99eswznfpeqxxc3pbyw-mysql.services.clever-cloud.com",
    port: 3306,
    user: "uijkjsvcfx0ttpzx",
    password: "lSKCpzs2yqsgFSlOLt26",
    database: "b99eswznfpeqxxc3pbyw",
});

app.get("/view", (req, res) => {
    con.query("SELECT * FROM contacts", (err, result) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        res.end(JSON.stringify(result));
    });
});



const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
