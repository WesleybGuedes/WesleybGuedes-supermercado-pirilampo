const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const products = stockProducts.map((product) => product.productName);
  return products;
};
module.exports = { getUniqueProductsName };
