const express = require ('express');
const path = require ('path')

const app = express ();

app.listen (3000, () => {
    console.log ('ferretero atendiendo');
});

app.get ('/', (req, res) => {
       res.sendFile(path.join(__dirname, './src/views/index.html'));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/register.html'));
});

const publicPath = path.join (__dirname, './public');
app.use( express.static(publicPath));