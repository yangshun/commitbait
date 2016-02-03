const programmingLanguages = Object.keys(require('../data/programmingLanguages.json'))
const frameworks = Object.keys(require('../data/frameworks.json'))
const numericalQuantities = Object.keys(require('../data/numericalQuantities.json'))
const positiveDescriptors = Object.keys(require('../data/positiveDescriptors.json'))
const techniqueDescriptors = Object.keys(require('../data/techniqueDescriptors.json'))
const extremeDescriptors = Object.keys(require('../data/extremeDescriptors.json'))
const improvementDescriptors = Object.keys(require('../data/improvementDescriptors.json'))

const list = [
  numericalQuantities,
  positiveDescriptors,
  techniqueDescriptors,
  ['to', 'which will'],
  extremeDescriptors,
  improvementDescriptors,
  ['your use of', 'the way you think about', 'the way you code in',
    'the way you do testing in'],
  [...programmingLanguages, ...frameworks],
  ['forever', 'like never before']
]

export default list
