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
    expect(t9.c['o'].value).to.equal('o');
    expect(t9.c['o'].c['m'].value).to.equal('om');
    expect(t9.c['o'].c['m'].c['a'].value).to.equal('oma');
    expect(t9.c['o'].c['m'].c['a'].c['r'].value).to.equal('omar');
  });

  it('returns an array of possible words given inserted numbers', function () {
    t9.insertWord('house');
    t9.insertWord('Home');
    t9.insertWord('hi');
    t9.insertWord('hillarious');
    t9.insertWord('honest');
    t9.insertWord('DeSales');

    expect(t9.getWord('4663')).to.equal(['home']);
  });

  it('returns an empty array is no words are found', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
