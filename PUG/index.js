const path = require("path");
const express = require("express");
const apiRutes = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", apiRutes);

//Desafio 10
const Products = require("./model/Products");
const products = new Products();

// engines
app.set("views", "./views");
app.set("view engine", "pug");

//Rutas
app.get("/", (req, res) => {
  res.render("main", { mostrarProductos: false, mostrarForm: true });
});

app.get("/productos", (req, res) => {
  res.render("main", {
    mostrarProductos: true,
    mostrarForm: false,
    products: products.getAll(),
  });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});
