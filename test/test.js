import Calculator from '../';
let chai = require('chai');
chai.should();

describe('Calculator', () => {
  describe('calculate', () => {
    it('should produce $1,591.58 given $1,299.99, 3 people, food', () => {
      Calculator.calculate(1299.99, 3, 'food').should.equal(1591.58);
    });

    it('should produce $6,199.81 given $5,432.00, 1 person, drugs', () => {
      Calculator.calculate(5432.00, 1, 'drugs').should.equal(6199.81);
    });

    it('should produce $13,707.63 given $12,456.95, 4 people, books', () => {
      Calculator.calculate(12456.95, 4, 'books').should.equal(13707.63);
    });

    it('should produce $1,591.59 given $1300, 3 people, food', () => {
      Calculator.calculate(1300, 3.0, 'food').should.equal(1591.59);
    });

    it('should throw invalid argument error if basePrice is invalid', () => {
      (function() {
        Calculator.calculate('blah', 1, 'drugs');
      }).should.throw(Error, /Invalid argument blah, it should be type Float/);
    });
  }); //ends calculate

  describe('categoryMarkup', () => {
    it('should return 7.5% given category is drug or drugs, pharmaceuticals', () => {
      Calculator.categoryMarkup('drug').should.equal(0.075);
      Calculator.categoryMarkup('drugs').should.equal(0.075);
      Calculator.categoryMarkup('pharmaceuticals').should.equal(0.075);
    });

    it('should return 13% given category is food', () => {
      Calculator.categoryMarkup('food').should.equal(0.13);
    });

    it('should return 2% given category is electronics', () => {
      Calculator.categoryMarkup('electronics').should.equal(0.02);
    });

    it('should return no markup if no category is given', () => {
      Calculator.categoryMarkup().should.equal(0);
      Calculator.categoryMarkup(null).should.equal(0);
      Calculator.categoryMarkup(undefined).should.equal(0);
      Calculator.categoryMarkup('foobar').should.equal(0);
    });
  }); //ends categoryMarkup

  describe('personsMarkup', () => {
    it('should return 1.2% per staff required', () => {
      Calculator.personsMarkup(3).should.equal(0.012 * 3);
    });

    it('should return 0 if no staff given or invalid input', () => {
      Calculator.personsMarkup(0).should.equal(0);
      Calculator.personsMarkup('foobar').should.equal(0);
      Calculator.personsMarkup(-5).should.equal(0);
      Calculator.personsMarkup(2.6).should.equal(0);
    });
  }); //ends personsMarkup
}); //ends Calculator
