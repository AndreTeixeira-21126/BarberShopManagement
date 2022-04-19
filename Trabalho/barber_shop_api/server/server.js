const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const http  = require('http');

const apiRouter = require('./routes/index.js');
const barber_router = require('./routes/barber_route.js');
const choice_router = require('./routes/choice_router.js');
const signup_router = require('./routes/signup_router.js');
const login_router = require('./routes/login_router.js');

const app = express();
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
path.basename(__dirname);

app.use(cors());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//serving public file
app.use(express.static(path.join(__dirname,"public")));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneDay }
}));
// cookie parser middleware
app.use(cookieParser());

app.use("/",apiRouter);
app.use("/barber",barber_router);
app.use("/choice",choice_router);
app.use("/signup",signup_router);
app.use("/login",login_router);

app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});


