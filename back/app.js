
const express = require("express")
const cors = require("cors")
const app = express()
const userRoutes= require("./routes/userRoutes")
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes)

app.get("/", (req,res) => {
    res.send("Main")
})
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});