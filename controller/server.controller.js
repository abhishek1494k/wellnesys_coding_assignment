const express=require("express")
const app = express();

const fs=require("fs");

const serverController = (req,res) =>{
    res.send({msg:"Welcome"})
}

module.exports = {serverController}