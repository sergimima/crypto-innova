const body = require("body-parser")
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

router.get('/login/:email/:password', async (req, res) => {
    try {
        const email = req.params.email
        const password = req.params.password
        const result = await pool.query(queries.selectUser,[email, password]);
        if (result.rowCount > 0) {
            // El usuario ha iniciado sesión correctamente
            console.log("Llega")
            res.send(result.rows)
           // req.session.userId = results[0].id;
            //res.redirect('/dashboard');
          } else {
            // El usuario no ha iniciado sesión correctamente
            res.send('Invalid username or password.');
            console.log("No Llega Llega")
          }
        //res.send(result.rows)
    }catch(error){
        res.send({error})
    }
});

module.exports = router;