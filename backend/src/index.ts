import express from 'express'
import { router } from './routes'
import log from './utils/logger'
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(5000, () =>
  log.info(`🚀 Server ready at: http://localhost:5000 ⭐️`),
)
