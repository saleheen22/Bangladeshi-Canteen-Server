const  chef = require('./data/chef.json');
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



app.listen(port, ()=> {
    console.log(`this is running on port number ${port}`)
})