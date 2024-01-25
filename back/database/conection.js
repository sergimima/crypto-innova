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
        const result = await pool.query("SELECT * FROM users")
        res.send(result.rows)
    }catch(error){
        res.send({error})
    }
})

router.get("/:nick", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users where nick = '$1'",[req.params.nick])
        res.send(result.rows[0])
    }catch(error){
        res.send({error})
    }
})
 

module.exports = router;
