const stockProducts = require('./data.json');

const getProductsOnSale = (promotional) => {
  const productsSale = {};
  const promotionalProduct = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (promotional === elemento.productName) {
      return [
        productsSale.description = elemento.description,
        productsSale.formattedPrice = `R$ ${elemento.price}`,
        productsSale.onSale = elemento.onSale ];      
    };
 
  };
     return promotionalProduct;
};


module.exports = { getProductsOnSale };
