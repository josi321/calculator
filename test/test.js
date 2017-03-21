// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

import Calculator from './';
let chai = require('chai');
chai.should();

describe('Calculator', () => {
  describe('calculate', () => {
    it('should throw error if the basePrice is invalid', () => {
      (function() {
        Calculator.calculate('randomstring', 3, 'drugs');
      }).should.throw(Error, /basePrice should be type float/);
    });

    it('should produce $1,591.58 given $1,299.99, 3 people, food', () => {
      Calculator.calculate(1299.99, 3, 'food').should.equal(1591.58);
    });

    it('should produce $6,199.81 given $5,432.00, 1 person, drugs', () => {
      Calculator.calculate(5432.00, 1, 'drugs').should.equal(6199.81);
    });

    it('should produce $13,707.63 given $12,456.95, 4 people, books', () => {
      Calculator.calculate(12456.95, 4, 'books').should.equal(13707.63);
    });
  }
