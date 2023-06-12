const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStock = [];
    for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
    if (elemento.quantityInStock > 0 && elemento.quantityInStock <= 10) {
      lowStock.push(`${elemento.productName}: ${elemento.quantityInStock} unidades`);
    };
  };
  return lowStock;
};
module.exports = { getLowStockProducts };