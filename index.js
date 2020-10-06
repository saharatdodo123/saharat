const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

/*app.get('/profile',(req, res) => {
    res.send("<h1>My Portfolio</h1>");
});*/
app.use('/profile', router);

app.use(express.static(path.join(__dirname,'public')));

app.listen(
    3000,
    () => {
        console.log("Listening to port 3000");
    }
);