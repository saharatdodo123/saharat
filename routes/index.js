const express = require('express');
const router = express.Router();
const myData = require('../data');

router.get('/',(req,res)=>{
    res.render('index',{myData});
});

router.get('/aboutme',(req,res)=>{
    res.render('about',{myData});
});

router.get('/education',(req,res)=>{
    res.render('education',{myData});
});

router.get('/workexperience',(req,res)=>{
    res.render('workexperience',{myData});
});

router.get('/contract',(req,res)=>{
    res.render('contract',{myData});
});

module.exports = router;