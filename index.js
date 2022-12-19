const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const Task = require('./models/Task');

// configuração do handlebars
app.engine('handlebars', exphbs.engine({extname: 'exphbs', defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// lê o corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.use(express.static('public'));

conn.sync().then(() => {
    app.listen(3000);
})
.catch((err) => console.log(err));