import express from 'express'
import cors from 'cors'
import {apiHookRout } from './src/routes'
const app = express()
app.use(express.json())
app.use(cors())
app.use(apiHookRout)