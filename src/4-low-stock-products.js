const stockProducts = require('./data.json');

const getLowStockProducts = () => stockProducts
  .filter((product) => product.quantityInStock > 0 && product.quantityInStock <= 10)
  .map((product) => `${product.productName}: ${product.quantityInStock} unidades`);

module.exports = { getLowStockProducts };
