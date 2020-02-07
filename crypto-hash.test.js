const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
  it('generates a SHA-256 hased', () => {
    expect(cryptoHash('foo'))
    .toEqual('2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae');
  });

  it('Produce same hash with same results', () => {
    expect(cryptoHash('one', 'two'))
    .toEqual(cryptoHash('one', 'two'));
  })
})