'use strict'
const productomodelo = require('../models/productomodelo');

async function listadoproducto(req=null){
 const listacontroladorpr = await productomodelo().listaproductos();
 return listacontroladorpr;

}
async function listadoalmohada(req=null){
    const lista = await productomodelo().listadoalmohadas();
    return lista;
   
   }
   async function listadocamiseta(req=null){
    const camisetas = await productomodelo().listadocamisetas();
    return camisetas;
   
   }
async function eliminarproducto(id_producto){
    const eliminarpr = await productomodelo().eliminarproductos(id_producto);
    return eliminarpr

   
   }
module.exports={
    listadoproducto,
    eliminarproducto,
    listadoalmohada,
    listadocamiseta
}