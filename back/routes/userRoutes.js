const express = require("express");
const router = express.Router();
const pool = require("../database/db");
const queries = require("../database/queries")

router.get("/", async (req, res) => {
    try {
        const result = await pool.query(queries.selectAll)
        res.send(result.rows)
    }catch(error){
        res.send({error})
    }
});

router.get('/:nick', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users where nick = 'djseku'",[req.params.nick])
        console.log(req.params.nick)
        res.send(result.rows)
    }catch(error){
        console.log(req.params.nick)
        res.send({error})
    }
});

module.exports = router;