const express = require("express");
const cors = require("cors");
const connectToMongoDB = require("./config/mongoDB");

const app = express();

app.use(cors());
app.use(express.json());
connectToMongoDB();

app.use("/group", require("./routes/group.route"));

const PORT = 5000;
app.listen(PORT, console.log(`Running on port ${PORT}`));
