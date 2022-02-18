require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Eduardo González',
//         titulo: 'Curso de Node'
//     });
// });
// app.get('/generic', (req, res) => {
//     res.render('generic', {
//         nombre: 'Eduardo González',
//         titulo: 'Curso de Node'
//     })
// });

// app.get('/elements', (req, res) => {
//     res.render('elements', {
//         nombre: 'Eduardo González',
//         titulo: 'Curso de Node'
//     })
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})