const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsVitamin = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (elemento.nutritionalInfo) {
      let alimentArray = {
        description : elemento.description,
        formattedPrice : `R$ ${elemento.price}`,
        vitaminsInformation : []      
      };
      productsVitamin.push(alimentArray);
 
    };
  };
  return(productsVitamin);
};

module.exports = { getProductsRichInVitamin };
