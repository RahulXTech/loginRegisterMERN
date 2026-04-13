import express from 'express'
import authMiddleware from '../middleware/authMiddleware'
import { createResult, listResults } from '../controllers/resultController'



const resultRouter = express.Router();


resultRouter.post('/', authMiddleware, createResult)
resultRouter.get('/', authMiddleware, listResults)



export default resultRouter;