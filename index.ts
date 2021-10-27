import express from 'express'
import cors from 'cors'
import {handleNlpRequest} from "./src/scenario";
// require('dotenv').config()

// const PORT = process.env.PORT || 5000
const PORT = 5000

const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('server started on port ', PORT)
    // createIntentsJSON()
})

app.post('/api/hook', (req, res) => {
    console.log(req.body);
    res.status(200).json(handleNlpRequest(req.body))
})