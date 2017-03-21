import CALCULATOR from '../';
let chai = require('chai');
chai.should();

describe('CALCULATOR', () => {
  describe('calculate', () => {
    it('should produce $1,591.58 given $1,299.99, 3 people, food', () => {
      CALCULATOR.calculate(1299.99, 3, 'food').should.equal(1591.58);
    });

    it('should produce $6,199.81 given $5,432.00, 1 person, drugs', () => {
      CALCULATOR.calculate(5432.00, 1, 'drugs').should.equal(6199.81);
    });

    it('should produce $13,707.63 given $12,456.95, 4 people, books', () => {
      CALCULATOR.calculate(12456.95, 4, 'books').should.equal(13707.63);
    });

    it('should produce $1,591.59 given $1300, 3 people, food', () => {
      CALCULATOR.calculate(1300, 3.0, 'food').should.equal(1591.59);
    });

    it('should throw error if basePrice is invalid', () => {
      (function() {
        CALCULATOR.calculate('blah', 1, 'drugs');
      }).should.throw(Error);
    });
  }); //ends calculate

  describe('categoryMarkup', () => {
    it('should return 7.5% given category is drug or drugs, pharmaceuticals', () => {
      CALCULATOR.categoryMarkup('drug').should.equal(0.075);
      CALCULATOR.categoryMarkup('drugs').should.equal(0.075);
      CALCULATOR.categoryMarkup('pharmaceuticals').should.equal(0.075);
    });

    it('should return 13% given category is food', () => {
      CALCULATOR.categoryMarkup('food').should.equal(0.13);
    });

    it('should return 2% given category is electronics', () => {
      CALCULATOR.categoryMarkup('electronics').should.equal(0.02);
    });

    it('should return no markup if no category is given', () => {
      CALCULATOR.categoryMarkup().should.equal(0);
      CALCULATOR.categoryMarkup(null).should.equal(0);
      CALCULATOR.categoryMarkup(undefined).should.equal(0);
      CALCULATOR.categoryMarkup('foobar').should.equal(0);
    });
  }); //ends categoryMarkup

  describe('personsMarkup', () => {
    it('should return 1.2% per staff required', () => {
      CALCULATOR.personsMarkup(3).should.equal(0.012 * 3);
    });

    it('should return 0 if no staff given or invalid input', () => {
      CALCULATOR.personsMarkup(0).should.equal(0);
      CALCULATOR.personsMarkup('hi').should.equal(0);
      CALCULATOR.personsMarkup(-1).should.equal(0);
      CALCULATOR.personsMarkup(1.5).should.equal(0);
    });
  }); //ends personsMarkup
}); //ends Calculator
