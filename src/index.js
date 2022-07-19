const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')

const route = require('./routes');
//connect DB
const db = require('./config/db');
db.connect();

const app = express();
const port = 3000

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());



app.use(morgan("combined"));
app.engine('hbs', engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})