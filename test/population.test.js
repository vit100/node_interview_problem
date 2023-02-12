import { expect } from 'chai';

import calculatePopulation from '../src/index';

const data = [
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
    country: 'Indonesia',
    pop: '263991379',
  },
];

describe('Calculates Population', () => {
  it('returns total population as an integer in an object', () => {
    const populationNoChina = calculatePopulation(data);
    expect(populationNoChina).to.deep.equal({ totalPop: 1927630969 });
  });
});
