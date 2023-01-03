const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//inicio
const app = express();

//configuraciones
app.set('port',process.env.PORT || 3000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join (app.get('views'),'layouts'),
    partialsDir: path.join (app.get('views'),'partial'),
    extname:'.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));

//api
app.use('/api', require('./routes/api/apiproducto'));

//iniciar el server 
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});
//public
app.use(express.static(path.join(__dirname,'public')));
