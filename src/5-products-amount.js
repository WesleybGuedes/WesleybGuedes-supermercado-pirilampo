const stockProducts = require('./data.json');

const getProductsAmount = () => stockProducts
  .reduce((total, product) => total + product.quantityInStock, 0);

module.exports = { getProductsAmount };
