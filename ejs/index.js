const express = require("express");
const app = express();

//Motor de plantillas:

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/productos.routes"));

const PORT = 8081;

app.listen(PORT, () => {
  console.log("App en http://localhost:" + PORT);
});
