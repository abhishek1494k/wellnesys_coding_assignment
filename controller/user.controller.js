const express=require("express")
const app = express();

const fs=require("fs");

const saveUser = (req,res) =>{

    res.send({msg:"Save user"});

}

const getUser = (req,res) =>{

    res.send({msg:"Get User"});

}

module.exports = {saveUser, getUser}