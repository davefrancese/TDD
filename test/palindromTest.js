const chai = require('chai');
const assert = chai.assert;
let palindrom = require('../palindrom').palindrom;


describe('palindrom', () => {
  it('string can be read the same if reversed', () => {
    assert.equal(palindrom('so many dynamos'), 'somanydynamos')
    assert.equal(palindrom('level'), 'level')
    assert.equal(palindrom('aAbB-cC$Cc-BbAa'), 'aabbccccbbaa')
    assert.equal(palindrom('whats up'), 'not a palindrom')

  })
  it('a phrase must exist', () => {
    assert.equal(palindrom(''), 'add a phrase. phrase must contain a letter.')
  })
  it('a phrase must contain at least 1 letter.', () => {
    assert.equal(palindrom('123321'), 'add a phrase. phrase must contain a letter.')
  })
})
