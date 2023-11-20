const express = require('express');
const cors = require('cors')
const data = require('./routes/blogRoutes');
const app = express();
app.use(cors(
    origin = "*"
))
app.use("/", data)
app.listen(3000, () => {
    console.log("server is listening")
})