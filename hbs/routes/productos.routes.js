const express = require("express");
const app = express();
const router = express.Router();

let PRODUCTOS_LISTA = [
  {
    id: 1,
    title: "Lapiz",
    price: "100",
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png",
  },
  {
    id: 2,
    title: "calculadora",
    price: "400",
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png",
  },
];

router.get("/", (req, res) => {
  res.render("home");
});

//obtener todos los productos:
router.get("/productos", (req, res) => {
  res.render("productos", { productos: PRODUCTOS_LISTA });
});

//Agregar un producto:
router.post("/productos", (req, res) => {
  const { title, price, thumbnail } = req.body;

  const productoCheck = PRODUCTOS_LISTA.filter((item) => item.title === title);
  if (productoCheck.length !== 0) {
    return res
      .status(400)
      .json({ error: "El producto ya se encuentra en la base de datos" });
  }

  if (!title.trim() || !price.trim() || !thumbnail.trim()) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  let id = PRODUCTOS_LISTA.length + 1;
  PRODUCTOS_LISTA.push({ id, title, price, thumbnail });
  res.redirect("/");
});

module.exports = router;
