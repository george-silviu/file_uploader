const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//demonstration routes
app.post("/upload", (req, res) => {
  //here it's going to come the modules that allow us to store the file

  setTimeout(() => {
    console.log("file uploaded");
    return res.status(200).json({ result: true, msg: "file uploaded" });
  }, 3000);
});

app.delete("/upload", (req, res) => {
  console.log("file deleted");
  return res.status(200).json({ result: true, msg: "file deleted" });
});

// app.use("/users", require("./routes/api/usersRoutes"));

app.listen(PORT, () => {
  console.log(`Express server is up at port ${3030}`);
});
