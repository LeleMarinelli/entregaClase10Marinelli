const express = require("express");
const Products = require("../../model/Products");

const products = new Products();

const router = express.Router();

//rutas
router.get("/", (req, res) => {
  let productsResponse = products.getAll();
  res.json({ Productos: productsResponse });
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const productEncontrado = products.getById(productId);
  if (!productEncontrado) {
    return res.status(404).json({
      error: `Producto no encontrado`,
    });
  }
  return res.json({ Producto: productEncontrado });
});

router.post("/", (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ error: "Faltan datos, o algo estas haciendo mal" });
  }

  const newProduct = { name, price, image };
  products.save(newProduct);

  return res.redirect("/");
});

router.put("/:productId", (req, res) => {
  const { productId } = req.params;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ error: "Faltan datos o estas haciendo algo mal." });
  }

  if (productId < 0)
    return res.status(404).json({
      error: `No existe el producto Nº ${productId}`,
    });

  const newProduct = {
    ...products[productId],
    name,
    price,
    image,
  };

  products.updateById(productId, newProduct);

  return res.json({ Mensaje: "Se ha cambiado el producto correctamente" });
});

router.delete("/:productId", (req, res) => {
  const { productId } = req.params;

  if (productId < 0)
    return res.status(404).json({
      error: `No existe el producto Nº ${productId}`,
    });

  products.deleteById(productId);
  return res.json({
    Mensaje: `Se ha eliminado el producto Nº ${productId} correctamente.`,
  });
});

module.exports = router;
