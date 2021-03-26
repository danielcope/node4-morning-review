require('dotenv').config();
const express = require('express');
const app = express();
const cors =require('cors')
const session = require('express-session')
const massive = require('massive');
// const controller = require('.ctrl');

const { SERVER_PORT,CONNECTION_STRING,SESSION_SECRET } = process.env;
app.use(express.json());
app.use(cors())

app.use(session({
  secret:SESSION_SECRET,
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 11.68
  }
})
)

//-------------Endpoints------------------




//-------------------------------------------



massive ({
    connectionString: CONNECTION_STRING,
    ssl:{
      rejectUnauthorized:false
    }
  })
    .then(dbInst => {
      app.set('db',dbInst)
        
      app.listen(SERVER_PORT,() => console.log(`Server running on port` + ' ' + SERVER_PORT))
    })
    .catch(err => console.log(err))