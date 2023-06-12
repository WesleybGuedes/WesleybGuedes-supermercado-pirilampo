const stockProducts = require('./data.json');

const getUniqueProductsAmount = (arrayStockProducts) => {
  return stockProducts.length;  
};
getUniqueProductsAmount(stockProducts);
module.exports = { getUniqueProductsAmount };