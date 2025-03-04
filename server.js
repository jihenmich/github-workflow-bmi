import express from "express"

const app = express()
const PORT = 5000

app.use(express.static("frontend"))

app.listen(PORT, () => console.log("server runs"))