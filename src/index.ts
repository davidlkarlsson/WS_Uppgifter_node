import express from "express"

const app = express()
const port: number = 3000

app.get("/", (request, response) => {
    response.send("Hello World!")
})

app.listen(port, () => {
console.log(`Listening to port ${port}`)
})
