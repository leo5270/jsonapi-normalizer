module.exports = function (response) {
  let data

  if (Array.isArray(response.data)) {
    data = response.data
  } else {
    data = [ response.data ]
  }

  const included = response.included || []
  const meta = response.meta || null

  let result = {}
  let entities = {}

  data.forEach(entity => {
    addResult(result, entity)
    addEntity(entities, entity)
  })

  included.forEach(entity => {
    addEntity(entities, entity)
  })

  return {
    result,
    entities,
    ...(meta ? {meta: meta} : {})
  }
}

function addResult (result, entity) {
  const { type, id } = entity

  if (!result[type]) result[type] = []

  result[type].push(id)
}

function addEntity (entities, entity) {
  const { type, id, attributes, meta } = entity

  if (!entities[type]) entities[type] = {}

  entities[type][id] = {
    id,
    ...attributes,
    ...extractRelationships(entity),
    ...(meta ? {meta: meta} : {})
  }

  return entities
}

function extractRelationships (entity) {
  const { relationships: responseRelationships } = entity

  if (!responseRelationships) return undefined

  let relationships = {}

  Object.keys(responseRelationships).map(type => {
    relationships[type] = duplicateRelationships(responseRelationships[type].data)
  })

  return relationships
}

function duplicateRelationships (relationships) {
  if (Array.isArray(relationships)) {
    return [ ...relationships ]
  } else {
    return { ...relationships }
  }
}
