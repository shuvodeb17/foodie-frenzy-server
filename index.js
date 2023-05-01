const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())


const foodRecipe = require('./data/foodRecipe.json');

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/allChef', (req, res) => {
    res.send(foodRecipe)
})

app.get('/chef/:id', (req, res)=>{
    const id = req.params.id;
    const check = foodRecipe.find(chef => chef.id === id);
    res.send(check);
})

app.listen(port, () => {
    console.log('foodie frenzy is running', port);
})
