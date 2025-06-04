const express = require("express");
const cors = require("cors");
const mainRouter = require('./routes/index')
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.get('/', (req, res) => {

    res.json({
        msg: "Welcome!"
    });
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});