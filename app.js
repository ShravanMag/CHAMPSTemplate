//this is the entry point of application
//in future if we want to add database, then we need to add entries here

//require modules

const express = require('express');
const morgan = require('morgan');
const methodoverride = require('method-override');
const dashboardRoutes =  require('./routes/dashboardRoutes');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middlware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodoverride('_method'));

//set up routes
//This code handles incoming requests and render related view(here ejs file)
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/EHE', (req, res)=>{
    res.render('EHEStrategicPlan');
});

app.get('/ContactUs', (req, res)=>{
    res.render('ContactForm');
});

app.get('/resource', (req, res)=>{
    res.render('resources');
});

app.get('/newsevents', (req, res)=>{
    res.render('newsandevents');
});

app.get('/aboutus', (req, res)=>{
    res.render('AboutUs');
});

app.use('/data', dashboardRoutes);

app.use('/about', dashboardRoutes);

//Below code handles error messages
//For e.g. if the requested page is not available OR Server is not up OR port number is wrong, 
//then the error meesage will displayed accordingly
app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);

});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }

    res.status(err.status);
    res.render('error', {error: err});
});

app.listen(port,host,()=>{
    console.log("Server is running on port",port);
})




