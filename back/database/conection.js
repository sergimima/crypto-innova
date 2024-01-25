const {Pool} = require("pg")
const express = require("express")
const router = express.Router()



const connectionString = {
    user:"postgres",
    database:"postgres",
    password:"crypto",
    host:"localhost",
    port:"5436"
}
const pool = new Pool(connectionString)

router.get("/", async (req, res) => {
    try {
        //console.log("aqui llega")
        const res = await pool.query("select * from users")
        res.send(res.rows)
    }catch(error){
        res.status(500).send({error})
    }
})
 

module.exports = router;
