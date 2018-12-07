const express = require('express');
const path = require('path');
const hbs = require('express-handlebars'); 
const ovr = require('method-override');
const session  = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

const app = express();

//Bd and Auth
require('../server/database');
require('../server/config/passport');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', 'src/client/views');
app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(ovr('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/products'));
app.use(require('./routes/products_tecnology'));
app.use(require('./routes/user'));

//Static files
app.use(express.static('src/client/public'));

//Run Server 
app.set('port', process.env.PORT || 3000 );

app.listen(app.get('port'), () => {
    console.log('Running on port', app.get('port'));
});
