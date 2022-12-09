const express = require('express')
const app = express()
const path = require('path')
const listadoRouter = require('./src/routes/producto')
const indexRouter = require('./src/routes/index')

// SETTINGS
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/productos', listadoRouter)


// ROUTES
/*app.get('/',(req, res)=>{
    res.send('Bienvenidos')
})*/



app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})

module.exports = app;