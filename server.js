const express = require('express');
const interviews = require('./schemas/interview');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scalar' );
const app = express();
const port = 3000;
const bp = require('body-parser');

app.set('view-engine','ejs');
app.use(bp.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'))
app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/create',(req,res)=>{
    res.render('create.ejs' , {errorMessage: ""});
});

app.post('/create',async (req,res)=>{
    let x = req.body;
    let obj = {};
    // obj.sdate = x.sdate;
    // delete x.sdate;
    // obj.stime = x.stime;
    // delete 
    // obj.edate = x.edate ;
    // obj.etime = x.etime;
    let arr = [];
    console.log(x,obj);
    for(const key in x){
        if(key == 'sdate') obj.sdate = x[key];
        else if(key == 'stime') obj.stime = x[key];
        else if(key == 'edate') obj.edate = x[key];
        else if(key == 'etime') obj.etime = x[key];
        else {
            arr.push(x[key]);
        }
    }
    if(arr.length >= 2){
        obj.participants = arr;
        console.log(obj);
        await interviews.create(obj);
        res.redirect('/create');
    }else{
        console.log("Hello")
        res.render('create.ejs' , {errorMessage : "error"});
    }
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});