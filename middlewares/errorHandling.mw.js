
// ----->>>>> Middleware for Server Error <<<<<-----
const errorHandling = (req, res, next, err) => {
  if (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  } else {
    next();
  }
};

module.exports = { errorHandling };
