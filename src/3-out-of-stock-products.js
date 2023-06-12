const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const outOfStock = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
    if (elemento.quantityInStock === 0) {
      outOfStock.push(elemento.productName);
    };
  };
  return outOfStock;
};
module.exports = { getOutOfStockProducts };
