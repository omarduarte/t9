/* 
  2: ABC
  3: DEF
  4: GHI
  5: JKL
  6: MNO
  7: PQRS
  8: TUV
  9: WXYZ

*/

describe('t9()', function () {
  var t9;
  'use strict';

  beforeEach(function() {
    t9 = T9Tree();
  });

  it('exists', function () {
    expect(t9).to.be.a('object');
  });

  it('inserts a word', function () {
    t9.insertWord('omar');
    expect(t9.nextChar['o'].value).to.equal('o');
    expect(t9.nextChar['o'].nextChar['m'].value).to.equal('om');
    expect(t9.nextChar['o'].nextChar['m'].nextChar['a'].value).to.equal('oma');
    expect(t9.nextChar['o'].nextChar['m'].nextChar['a'].nextChar['r'].value).to.equal('omar');
    expect(t9.nextChar['o'].nextChar['m'].nextChar['a'].nextChar['r'].isWord).to.equal(true);
  });

  it('returns an array of possible words given inserted numbers', function () {
    t9.insertWord('house');
    t9.insertWord('Home');
    t9.insertWord('hi');
    t9.insertWord('hillarious');
    t9.insertWord('honest');
    t9.insertWord('DeSales');

    expect(t9.getWords('44')[0]).to.equal('hi');
    expect(t9.getWords(44)[1]).to.equal('hillarious');
    expect(t9.getWords('4663')[0]).to.equal('Home');
    expect(t9.getWords(4663)[1]).to.equal('honest');
  });

  it('returns an empty array is no words are found', function () {
    t9.insertWord('house');
    t9.insertWord('Home');
    t9.insertWord('hi');
    t9.insertWord('hillarious');
    t9.insertWord('honest');
    t9.insertWord('DeSales');
    expect(t9.getWords(2)).to.equal([]);
  });

  it('fetches all words in a tree', function () {
    t9.insertWord('house');
    t9.insertWord('DeSales');

    expect(t9.getAllWords()[0]).to.equal('house');
    expect(t9.getAllWords()[1]).to.equal('DeSales');
  });

  // Add more assertions here
});
