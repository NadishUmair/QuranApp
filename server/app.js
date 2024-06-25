require("dotenv").config();
const express = require("express");
const ConnectDB = require("./database");
const cors = require("cors");
const router = require("./routes/Allroutes");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
ConnectDB();
app.use(express.json());


app.use("/api/users", router);

app.listen(port, () => {
  console.log("app is running at port", port);
});
