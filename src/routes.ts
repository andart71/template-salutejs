
import { Router } from 'express'
// import { cocktails } from './cocktailsData'
import { handleNlpRequest } from './scenario'

export const listRout = Router()
export const apiHookRout = Router()

// listRout.get('/api/cocktailsList', (req, res) => {
//     res.status(200).json(cocktails)
// })
apiHookRout.post('/api/hook', async (req, res) => {
    console.log('api/hook request')
    res.status(200).json(await handleNlpRequest(req.body))
})