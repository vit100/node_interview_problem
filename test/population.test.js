import { expect } from 'chai';

import calculatePopulation from '../src/index';

const testData = [
  {
    country: 'China',
    pop: '1409517397',
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Novuron',
    pop: 'unknown',
  },
  {
    country: 'Indonesia',
    pop: ' 263991379',
  },
];

describe('Calculates Population', () => {
  it('returns total population as an integer in an object', () => {
    const populationNoChina = calculatePopulation(testData);
    expect(populationNoChina).to.deep.equal({ totalPop: 1927630969 });
  });

  it('returns total population as an integer in an object for all countries except USA', () => {
    const population = calculatePopulation(testData, ['USA']);
    expect(population).to.deep.equal({ totalPop: 3012688903 });
  });

  it(
    'should throw exception with message "Missing required parameter" if no data provided'
  );
});
