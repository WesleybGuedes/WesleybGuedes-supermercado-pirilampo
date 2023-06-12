const stockProducts = require('./data.json');

const searchProductByName = (searchProduct) => {
    for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (searchProduct === elemento.productName) {
      return {
        description: elemento.description,
        formattedPrice: `R$ ${elemento.price.toFixed(2)}`
      };      
    };
  };
    return null;
};

module.exports = { searchProductByName };