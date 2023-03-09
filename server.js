require('dotenv').config();
const PORT = 5000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/weather',async(req,res) =>{
    try {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&appid=${process.env.API_key}&units=metric`
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.log(error);
    }
    
})


app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)});
