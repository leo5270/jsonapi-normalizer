import normalize from '../src/index'

import singleItem from '../test-data/singleItem'
import simpleCollection from '../test-data/simpleCollection'
import belongsToCollection from '../test-data/belongsToCollection'
import belongsToOwnTypeCollection from '../test-data/belongsToOwnTypeCollection'
import hasManyCollection from '../test-data/hasManyCollection'
import withMeta from '../test-data/withMeta'
import withMeta2 from '../test-data/withMeta2'

describe('normalize()', () => {
  function testNormalizes (payload, message) {
    it(message, () => {
      expect(normalize(payload.jsonapi)).toEqual(payload.normalized)
    })
  }

  testNormalizes(singleItem, 'single object')
  testNormalizes(simpleCollection, 'simple collection')
  testNormalizes(belongsToCollection, 'collection with a belongs-to relationship')
  testNormalizes(belongsToOwnTypeCollection, 'collection with references to objects of the same type')
  testNormalizes(hasManyCollection, 'has-many collection')
  testNormalizes(withMeta, 'with meta')
  testNormalizes(withMeta2, 'with meta 2')
})
