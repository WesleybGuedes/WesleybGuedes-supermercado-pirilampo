const stockProducts = require('./data.json');

const getOutOfStockProducts = () => stockProducts
  .filter((product) => product.quantityInStock === 0)
  .map((product) => product.productName);
module.exports = { getOutOfStockProducts };
