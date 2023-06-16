require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const DB = require('./database/index')
const PORT = process.env.PORT || 7001



const swineRoute = require('./routes/swineroutes')
const feedRoute = require('./routes/feedroutes')


// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // for accepting form data


//routes
app.use('/swine', swineRoute);
app.use('/feed', feedRoute);


DB().then(() => {
  app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
  })
})