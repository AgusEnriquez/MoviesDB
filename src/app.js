const express = require ("express")
const app = require('express')();
require("dotenv").config();
const db = require ("./database/models");


app.get("/", async (req,res) => {
    const movies = await db.movie.findAll({include:"genre"});
    res.json (movies)    
})


app.listen(3000, () => console.log ("funcionando"))