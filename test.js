'use strict';

var expect = require('chai').expect;
var isLeapYear = require('./index');

describe('isLeapYear', function () {
  it('accepts numbers', function () {
    expect(isLeapYear(2016)).to.be.true;
    expect(isLeapYear(2015)).to.be.false;
  });
  it('accepts Date objects', function () {
    expect(isLeapYear(new Date('December 5, 2016'))).to.be.true;
    expect(isLeapYear(new Date(1481004284799))).to.be.true;
    expect(isLeapYear(new Date('December 5, 2017'))).to.be.false;
  });
  it('throws exception for invalid params', function () {
    expect(function () {
      isLeapYear('bogus')
    }).to.throw(Error);
    expect(function () {
      isLeapYear(false)
    }).to.throw(Error);
  });
  it('throws exception for invalid Dates', function () {
    expect(function () {
      isLeapYear(new Date('bogus'))
    }).to.throw(Error);
  });
  it('returns true if multiple of 4', function () {
    [4, 8, 2016].forEach(function (y) {
      expect(isLeapYear(y)).to.be.true;
    });
  });
  it('returns true if multiple of 400', function () {
    [400, 800, 3200].forEach(function (y) {
      expect(isLeapYear(y)).to.be.true;
    });
  });
  it('returns false if multiple of 100', function () {
    [100, 200, 1900].forEach(function (y) {
      expect(isLeapYear(y)).to.be.false;
    });
  });
});
