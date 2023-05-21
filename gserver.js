const express=require("express");
const app = express();
const PORT = process.env.PORT || 8000

const { serverRouter } = require("./routes/server.router");
const { userRouter } = require("./routes/user.router");

app.use(serverRouter)
app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log(`Connected to ${PORT} Port`)
});
