const express = require('express');
const app = expres();
const path = require("path");
app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dotenv = require("dotenv");

const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize(
    dotenv.config().DB_NAME,
    dotenv.config().DB_USER,
    dotenv.config().DB_PW,
    dotenv.config()
)   

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log(process.env.DB_PORT);
console.log(process.env);


app.listen(port, ()=>{
    console.log("server open: ", port);
});