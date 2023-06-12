const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStock = [];
  const quantityStock = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
    if (elemento.quantityInStock > 0 && elemento.quantityInStock <= 10) {
      lowStock.push(elemento.productName);
      quantityStock.push(elemento.quantityInStock);
    };
  };
  return lowStock;
};
console.log(getLowStockProducts());
module.exports = { getLowStockProducts };
/* O formato dos elementos do array deve ser: 
{nome do produto}: {quantidade em estoque} unidades; */