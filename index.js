// Set the markup rates
const flat = 0.05;
const drug = 0.075;
const food = 0.13;
const electronics = 0.02;
const persons = 0.012;
const defaultMarkup = 0;

//function to calculate the cost of the project
const Calculator = {

  calculate(basePrice, quantity, category) {
    //if basePrice is not a number, then parse it, and throw an error to ask for a baseprice as a float
    if (isNaN(parseFloat(basePrice))) {
      throw new Error(`${basePrice} is not a number and is invalid. It should be type float`);
    }
    //if the basePrice is type string, then parse it
    if ( typeof basePrice === 'string' ) {
      basePrice = parseFloat( basePrice );
    } else if ( typeof basePrice !== 'number' ) {
      throw new Error( 'basePrice should be float or string' );
    }

    //function to calculate the total cost
    let flatMarkupBaseCost = basePrice * (1 + flat);
    let personsCost = flatMarkupBaseCost + (flatMarkupBaseCost * this.personsMarkup(quantity))
    let finalCost = personsCost + (flatMarkupBaseCost * this.categoryMarkup(category));
    return Number(Math.round(finalCost+ 'e2') + 'e-2');
  },

  //setting up the category markup
  categoryMarkup(category) {
    switch (category) {
      case 'drug': case 'drugs': case 'pharmaceuticals': case 'pharma':
        return drug;
      case 'food':
        return food;
      case 'electronics':
        return electronics;
      default:
        return defaultMarkup;
    }
  },

  //function to calculate the markup per worker. people variable to check to make sure that people # is valid
  personsMarkup(workers) {
    let people = parseInt(workers) === workers && workers >= 0;
    return people ? workers * persons : 0;
  }

};

//export this to the test.js file
export default Calculator;
