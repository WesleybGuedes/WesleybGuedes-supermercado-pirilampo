const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let fullStock = 0;
  let stockPerProducts = [];
    for ( index = 0; index < stockProducts.length; index += 1 ) {
      const elemento = stockProducts[index];
      stockPerProducts[index] = elemento.quantityInStock;
      fullStock += stockPerProducts[index];
    }
  return fullStock;
};
console.log(getProductsAmount());
module.exports = { getProductsAmount };
