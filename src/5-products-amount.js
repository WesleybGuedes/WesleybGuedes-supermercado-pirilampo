const stockProducts = require('./data.json');

const getProductsAmount = () => {
  const fullStock = undefined;
  let stockPerProducts = [];
    for ( index = 0; index < stockProducts.length; index += 1 ) {
      const elemento = stockProducts[index];
      stockPerProducts[index] = elemento.quantityInStock;
    }
  return stockPerProducts;
};
console.log(getProductsAmount());
module.exports = { getProductsAmount };
