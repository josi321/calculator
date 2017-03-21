// Set the markup rates
const FLAT = 0.05;
const DRUG = 0.075;
const FOOD = 0.13;
const ELECTRONICS = 0.02;
const PERSONS = 0.012;
const DEFAULT= 0;

//function to calculate the cost of the project
const CALCULATOR = {

  calculate(basePrice, quantity, category) {
    //if basePrice is not a number, then parse it, and throw an error to ask for a baseprice as a float
    if (isNaN(basePrice)){
      throw new Error(`${basePrice} is not a number and is invalid. It should be type float`);
    }
    //if the basePrice is type string, then parse it
    if ( typeof basePrice === 'string' ) {
      basePrice = parseFloat( basePrice );
    } else if ( typeof basePrice !== 'number' ) {
      throw new Error( 'basePrice should be float or string' );
    }

    //function to calculate the total cost
    let flatMarkupBaseCost = basePrice * (1 + FLAT);
    let personsCost = flatMarkupBaseCost + (flatMarkupBaseCost * this.personsMarkup(quantity))
    let finalCost = personsCost + (flatMarkupBaseCost * this.categoryMarkup(category));
    return Number(Math.round(finalCost+ 'e2') + 'e-2');
  },

  //changed the switch case into object literals for the category markup
categoryMarkup(category) {
    let categories = {
    'food' : FOOD,
    'electronics': ELECTRONICS,
    'default': DEFAULT
  };
  categories.drug = categories.drugs = categories.pharmaceuticals = categories.pharma = DRUG;

  return (categories[category] || categories['default'])
},


  //function to calculate the markup per worker. people variable to check to make sure that people # is valid
  personsMarkup(workers) {
    let people = parseInt(workers) === workers && workers >= 0;
    return people ? workers * PERSONS : 0;
  }

};

//export this to the test.js file
export default CALCULATOR;
