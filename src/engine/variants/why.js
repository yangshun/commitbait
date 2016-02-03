const improvementDescriptors = Object.keys(require('../data/improvementDescriptors.json'))
const buzzwords = Object.keys(require('../data/buzzwords.json'))
const measurableEntities = Object.keys(require('../data/measurableEntities.json'))
const mindblowingSentences = Object.keys(require('../data/mindblowingSentences.json'))

const why = [
  ['Why', 'Reasons'],
  ['you'],
  ['should be using', 'have to use', 'must use'],
  buzzwords,
  ['to'],
  improvementDescriptors,
  ['your'],
  measurableEntities,
  ['.'],
  mindblowingSentences
]

export default why
