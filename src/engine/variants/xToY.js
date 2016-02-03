const programmingLanguages = Object.keys(require('../data/programmingLanguages.json'))
const frameworks = Object.keys(require('../data/frameworks.json'))
const positiveStates = Object.keys(require('../data/positiveStates.json'))

var xToY = [
  ['First you\'ll be'],
  ['shocked,', 'dismayed,', 'appalled,', 'furious,'],
  ['then you\'ll be'],
  positiveStates,
  ['by'],
  ['this one-liner', 'these 2 lines of code', 'this simple trick'],
  ['in'],
  [...programmingLanguages, ...frameworks]
]

export default xToY
