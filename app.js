// require HTTP module
var http = require('http');

// Initialize the giphy-api library
var giphy = require('giphy-api')();

var express = require('express');

var app = express();

var exphbs = require('express-handlebars');



app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars')
app.use(express.static('public'));

// Root Route    *DON'T MAKE SPELLING ERROR*
app.get('/', function (req, res) {

    var searchString = req.query.term || "Clown"

    giphy.search(searchString, function (err, response) {
        res.render('home', {gifs: response.data})
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
