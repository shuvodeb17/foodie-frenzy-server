const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())


const foodRecipe = require('./data/foodRecipe.json');

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/chef', (req, res) => {
    res.send(foodRecipe)
})

app.listen(port, () => {
    console.log('foodie frenzy is running', port);
})
