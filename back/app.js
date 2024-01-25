const express = require("express")
const app = express()
const dbConnection = require("./database/conection")


app.listen(3000)

app.use("/login/:djseku", dbConnection)

app.get("/", (req, res) => {
    res.send("hola")
})
