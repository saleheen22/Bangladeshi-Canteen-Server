const  chef = require('./data/chef.json');
const  recipes = require('./data/recipe.json');
const express  = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.get('/', (req, res)=> {
    res.send('The server is running')
});

app.get('/chefs', (req, res)=>{
    res.send(chef);
})
app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    res.send(chef.find(n=> n.id == id));
    
    // res.send(chef);
})
app.get('/recipes', (req, res)=>{
    res.send(recipes);
})
app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id;
    res.send(recipes.filter(n=> n.id == id))

    // res.send(chef);
})



app.listen(port, ()=> {
    console.log(`this is running on port number ${port}`)
})