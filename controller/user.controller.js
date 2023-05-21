const express = require("express");
const app = express();
const fs = require("fs");

//------------->>>>> Get Users Data <<<<<----------------
const getUser = (req, res) => {
  try {
    fs.readFile(`./config/db.json`, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const users = JSON.parse(data);
        res.status(201).json(users);
      }
    });
  } catch (error) {
    res.status(404).json({ Error: error });
  }
};

//------------->>>>> Save Users Data <<<<<----------------
const saveUser = (req, res) => {
  let newUser = req.body;
  let data;

  try {
    fs.readFile(`./config/db.json`, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        data = JSON.parse(data);
        data.push(newUser);
        fs.writeFile(
          "./config/db.json",
          JSON.stringify(data),
          "utf8",
          (err) => {
            if (err) {
              console.error("Error writing file:", err);
              res.status(500).json({ error: "Internal Server Error" });
            } else {
              res.status(201).json(newUser);
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(404).json({ Error: error });
  }
};

module.exports = { saveUser, getUser };
