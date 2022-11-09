
const express = require("express");
const app = express();
const middleWare1 = (req,res,next) => {
    console.log("Middleware1");
    next();
}
const middleWare2 = (req,res,next) => {
    console.log(" Middleware2");
    next();
}
app.use(middleWare1);
app.get('/', (req,res)=>{
    res.send(' middleware 1');
})
app.get('/main', (req,res)=>{
    res.send('Middleware 1 and 2');
})
app.get('/home',middleWare2, (req,res)=>{
    res.send('you are on the home page');
})
app.get('/contact',middleWare2, (req,res)=>{
    res.send('contact page is here ');
})

app.listen(3000,()=>{
    console.log('server is started');
})