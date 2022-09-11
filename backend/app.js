const express = require("express");
const path = require("path");

//database

const app = express();

//Use

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "build", "index.html"));
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`port is listen at http://localhost:${port}`);
});
