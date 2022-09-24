const express = require('express');
const app = express();
const Joi = require('joi');
const { tellFibs } = require('./tellFibs');
//var bodyParser = require('body-parser');
//app.use(express.json);

app.use(express.urlencoded({
    extended: true
  }));
//var jsonParser = bodyParser.json;

app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    var fibs = 'click GO!!! for results'
    res.render('pages/fibseq', {
        fibs: fibs
    });
});

const schema = Joi.object().keys({
    inputNth: Joi.number().integer().min(1).max(100).required()
})
//calculate fibonacci sequence

app.post('/fibseqs', function(req, res) {
    console.log(req.body);
    const results = tellFibs(req.body.inputNth);
    const validResult = schema.validate(req.body);
    if(validResult.error){
        //400 bad request
        res.status(400).send(validResult.error.details[0].message);
        return;
    }
    console.log(results);
    var fibs = req.body.inputNth + ' Fibonacci Sequence digits: ' + results;
    res.render('pages/fibseq', {
        fibs: fibs
    });
})

app.listen(8080);
console.log('Server is listening on port 8080');