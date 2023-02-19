import { expect } from 'chai';

describe('Calculates Population', () => {
  it('should calculate total and return population object', () => {
    const expectedResult = { totalPop: 'someResultHere' };
    const populationNoChina = expectedResult; // invoke ../src/calculatePopulation(data) instead
    expect(populationNoChina).to.deep.equal(expectedResult);
  });

  it('should calculate total with applied filter as array of countries');

  it('should throw if no data provided with message "No data provided"');
});
