const express = require("express");
const app = express();

const fs = require("fs");

//----->>>>> M/W for Invalid Routes<<<<<-----
const serverController = (req, res) => {
  try {
    res.json({ msg: "Welcome" });
  } catch (error) {
    res.json({ Error: error });
  }
};

module.exports = { serverController };
