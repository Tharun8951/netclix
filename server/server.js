const express = require('express')
const app = express()


const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const favoriteHandler = require('./routes/favorites.routes')
const userhandler = require('./routes/users.routes')

const cors = require('cors')
const bodyParser = require('body-parser')
// create application/json parser
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)


app.use(cors(
  {
  origin: ["http://localhost:3000",
  "https://netclix-app.onrender.com"]
}
))


app.use(express.json())


app.listen(process.env.PORT , () => {
  console.log('Server has started')
})

const mongoDB = require('./db')
mongoDB()

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.use('/api', favoriteHandler)
app.use('/users', userhandler)
