const fs = require("fs");

const logger = (req, res, next) => {
    let data = ` Time:- ${new Date()} | Method:- ${req.method } | Url: ${req.url } `
      try {
        
        fs.appendFileSync("./logger.txt", `${data}\n`, "utf8");
        next();
      } catch (err) {
        console.error("Error writing file:", err);
      }
}; 

module.exports = {logger}

