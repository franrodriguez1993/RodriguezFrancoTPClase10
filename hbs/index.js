const express = require("express");
const app = express();
const { create } = require("express-handlebars");

//Motor de plantillas:
const hbs = create({
  extname: ".hbs",
  partialsDir: ["views/components"],
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/productos.routes"));

const PORT = 8080;

app.listen(PORT, () => {
  console.log("App en http://localhost:" + PORT);
});
