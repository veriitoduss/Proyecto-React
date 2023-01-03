const express = require('express');
const router = express.Router();
const pool= require ('../database');

router.get('/add',async(req,res)=>{
   // res.send ('BUENASsSs')
   const usua = await pool.query('SELECT * FROM usuarios')
   res.render('links/add',{usua})
});

module.exports = router;