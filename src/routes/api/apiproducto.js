const express = require('express');
const router=express.Router();
const productocontrolador= require('../../controllers/productocontroll');

router.get('/producto',async(req,res)=>{
    const producto= await productocontrolador.listadoproducto(req);
    res.json({producto});
});
router.get('/almohada',async(req,res)=>{
    const almohada= await productocontrolador.listadoalmohada(req);
    res.json({almohada});
});
router.get('/camisetas',async(req,res)=>{
    const camiseta= await productocontrolador.listadocamiseta(req);
    res.json({camiseta});
});
router.get('/eliminarproducto/:id_producto',async(req,res)=>{
    const {id_producto} = req.params;
    await productocontrolador.eliminarproducto([id_producto]);
    res.redirect('/api/productos/producto')
});
module.exports=router;