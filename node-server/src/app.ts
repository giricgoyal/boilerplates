import express from 'express'
import cors from 'cors'
import { initRoutes } from './routes'
import config from './config'

const app = express()
const port: number = parseInt(config.PORT as string, 10) || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
initRoutes(app)

try {
    app.listen(port, () => {
        console.log(`server is listening on ${port}`)
    })
} catch (err) {
    console.log(err)
}
