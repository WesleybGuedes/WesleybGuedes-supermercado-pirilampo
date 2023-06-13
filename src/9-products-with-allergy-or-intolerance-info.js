const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const productsAlergyInt = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
      if (elemento.allergyOrIntolerance) {
      let alimentArray = {
        description : elemento.description,
        formattedPrice : `R$ ${elemento.price}`,
        allergyOrIntolerance : `Pode conter ${elemento.allergyOrIntolerance}.`      
      };
    productsAlergyInt.push(alimentArray);
 
    };
  };
  return(productsAlergyInt);
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
