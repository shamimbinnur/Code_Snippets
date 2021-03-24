const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secrateKey = "125451551134"

app.post('/', (req, res)=>{

    const id ="011112221"

    const token = jwt.sign({"id": id }, secrateKey);
     
    
    try {
        const verify = jwt.verify(token, secrateKey);
        console.log(verify);
        res.send(verify);
    } catch (error) {
        res.send(error)
    }



    
})

app.listen(5000, ()=> console.log("Started"))