const stockProducts = require('./data.json');

const getUniqueProductsAmount = (arrayStockProducts) => {
  let uniqueProducts = stockProducts.length;
  return uniqueProducts;  
};
module.exports = { getUniqueProductsAmount };