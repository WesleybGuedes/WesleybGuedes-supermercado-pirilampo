const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const promotionalProduct = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (elemento.onSale === true) {
      let productsSale = {
        description : elemento.description,
        formattedPrice : `R$ ${elemento.price}`,
        onSale : true      
      };
    promotionalProduct.push(productsSale);
 
    };
  };
  return(promotionalProduct);
};
module.exports = { getProductsOnSale };
