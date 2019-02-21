const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// Controllers
const DataController = require('./controllers/MockDataController') 

const app = express()
const port = process.env.PORT || 4007

app.use(cors());
app.use(bodyParser.json())

//Endpoints

app.get("/api/getGenomes", cors(), DataController.getGenomes)

app.listen(port, () => {
  console.log('listening on port:', port)
})