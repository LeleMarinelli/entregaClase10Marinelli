const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const apiRutes = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static("public"));

// Routes
app.use("/api", apiRutes);

//Desafio 10
const Products = require("./model/Products");
const products = new Products();

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve(__dirname, "./views/layouts"),
    partialsDir: path.resolve(__dirname, "./views/partials"),
  })
);
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", { mostrarProductos: false, mostrarForm: true });
});

app.get("/productos", (req, res) => {
  res.render("index", { mostrarProductos: true, products: products.getAll() });
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});
