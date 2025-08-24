import express from "express"
import { env } from "node:process"

const app = express()
const port: number = Number(env.PORT) || 3000
const address: string = "0.0.0.0" // Required for Render

app.get("/", (request, response) => {
    response.send("Hello World!")
})

app.listen(port, address, () => {
console.log(`Listening to port ${port}`)
})
