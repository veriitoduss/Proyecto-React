'use strict'

const pool = require("../database");

module.exports = function(){

async function listaproductos(req){
    //const productos = await pool.query('SELECT p.id_producto,p.imagen,m.medida,c.color,tp.nombremugs,o.nombreocasion,p.valor,i.nombreitem FROM productos p,medidas m, colores c, ocasiones o,items i, tipomugs tp WHERE p.id_medida=m.id_medida AND p.id_color=c.id_color AND p.id_tipomugs=tp.id_tipomugs AND p.id_ocasion=o.id_ocasion AND p.id_item=i.id_item');
    const productos = await pool.query('SELECT p.imagen,c.color,t.nombretipo,o.nombreocasion,p.valor FROM productos p,colores c,tipos t,ocasiones o WHERE p.id_color=c.id_color AND p.id_tipo=t.id_tipo AND p.id_ocasion=o.id_ocasion AND p.id_item=2');
    return productos;
}
async function listadoalmohadas(req){
    const almohadass = await pool.query('SELECT p.imagen,c.color,t.nombretipo,o.nombreocasion,p.valor FROM productos p,colores c,tipos t,ocasiones o WHERE p.id_color=c.id_color AND p.id_tipo=t.id_tipo AND p.id_ocasion=o.id_ocasion AND p.id_item=4');
    return almohadass;
}
async function listadocamisetas(req){
    const camiseta = await pool.query('SELECT p.imagen,c.color,t.nombretipo,o.nombreocasion,p.valor FROM productos p,colores c,tipos t,ocasiones o WHERE p.id_color=c.id_color AND p.id_tipo=t.id_tipo AND p.id_ocasion=o.id_ocasion AND p.id_item=1');
    return camiseta;
}
async function eliminarproductos(id_producto){
    await pool.query('DELETE FROM productos WHERE id_producto=?',[id_producto]);
    return true;
}
return{
    listaproductos,
    eliminarproductos,
    listadoalmohadas,
    listadocamisetas
}
}