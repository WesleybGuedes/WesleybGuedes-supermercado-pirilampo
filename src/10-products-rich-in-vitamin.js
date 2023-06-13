const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  const productsVitamin = [];
  for ( index = 0; index < stockProducts.length; index += 1 ) {
    const elemento = stockProducts[index];
    const elementoVitamin = elemento.nutritionalInfo.vitamins;
      if (elemento.nutritionalInfo.vitamins != undefined) {  
        let vitaminsProduct = Object.keys(elementoVitamin);  //pq so funciona dentro do if
        let qntVitaminsProduct = Object.values(elementoVitamin);  //pq so funciona dentro do if
        let alimentArray = {
        description : elemento.description,
        formattedPrice : `R$ ${elemento.price}`,
        vitaminsInformation : [`${vitaminsProduct} - ${qntVitaminsProduct}`],     
      };
      productsVitamin.push(alimentArray);
 
    };
  };
  return(productsVitamin);
};

module.exports = { getProductsRichInVitamin };
