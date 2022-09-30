import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRouter from './routes/student.js'
import mentorRouter from './routes/mentor.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URI

// DB Connection
mongoose.connect(
  MONGO_URL,
  {
    useNewURLParser: true,
    useUnifiedTopology: true
  }
)

const connection = mongoose.connection
connection.on('open', () => console.log('MongoDB Connected Successfully'))

// server started
app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/students', studentRouter)
app.use('/mentors', mentorRouter)

app.listen(PORT, () =>
  console.log('the server is Successfully connected', PORT)
)
