const express = require("express");
const app = express();

const fs = require("fs");

//----->>>>> Server Contoller <<<<<-----
const serverController = (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to Wellnesys Home Route!!!" });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

module.exports = { serverController };
