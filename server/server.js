const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/users", require("./routes/api/usersRoutes"));

app.listen(PORT, () => {
  console.log(`Express server is up at port ${3030}`);
});
