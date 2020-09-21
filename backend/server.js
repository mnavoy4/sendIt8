const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/indexRoute');
const ridesRoute = require('./routes/ridesRoute');
const dotenv = require('dotenv');
const config = require('./config');
const mongoose = require('mongoose');

// dotenv.config();

// const mongodbUrl = config.MONGODB_URL;
// mongoose.connect(mongodbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// }).catch(error => console.log(error.reason));


const app = express();

const port = 3000;

app.listen(port, function(){
  console.log('listening on port', port);
});

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", indexRoute);
app.use('/rides', ridesRoute);
