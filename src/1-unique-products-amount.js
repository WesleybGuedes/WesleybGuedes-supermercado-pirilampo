const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  stockProducts.map((product) => product.productName);
  return stockProducts.length;
};
module.exports = { getUniqueProductsAmount };
