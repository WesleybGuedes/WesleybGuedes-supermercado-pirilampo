const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const productsList = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    productsList[index] = stockProducts[index].productName;
  }
  return productsList;
};
module.exports = { getUniqueProductsName };
