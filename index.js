const express = require('express');
const app = express();
const { port, dbURI, secret } = require('./config/environment'); //add secret after db
// const { port } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const morgan = require('morgan');



// const bcrypt = require('bcrypt');

const router = require('./config/routes');



const bodyParser = require('body-parser');
const methodOverride  = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const userAuth = require('./lib/userAuth');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true });



app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(userAuth);
app.use(morgan('dev'));
app.use(router);

// router.route('/toilets')
//   .get(toilets.index); sent to routes


// app.get('/', (req, res) => res.send('coys'));
// app.get('/', (req, res) => res.render('home')); exported to routes

app.listen(port, () => console.log(`Express listening to port ${port}`));
