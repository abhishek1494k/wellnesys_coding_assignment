const express = require("express");
const app = express();
app.use(express.json());

const { serverRouter } = require("./routes/server.router");
const { userRouter } = require("./routes/user.router");
const { errorHandling } = require("./middlewares/errorHandling.mw.js");
const { logger } = require("./middlewares/logger.mw");

app.use(logger);
app.use(errorHandling);
app.use(serverRouter);
app.use("/users", userRouter);

// ----->>>>>Middleware for invalid routes<<<<<-----
app.use((req, res) => {
  res.status(404).json({ error: "Route Not Found" });
});

//---->>>>>Connection with PORT<<<<----
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Connected to ${PORT} Port`);
});
