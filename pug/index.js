const express = require("express");
const app = express();

//Motor de plantillas:
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/productos.routes"));

const PORT = 8080;

app.listen(PORT, () => {
  console.log("App en http://localhost:" + PORT);
});
