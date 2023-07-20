import express from 'express'
import cors from 'cors'
import router from './routes/gameRoutes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World! To access api go to /api/v1/games')
  })


app.use("/api/v1/games",router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server ready at: http://localhost:${port}`)
})