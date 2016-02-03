var fsmHelper = require('./fsm')

const programmingLanguages = Object.keys(require('./data/programmingLanguages.json'))
const numericalQuantities = Object.keys(require('./data/numericalQuantities.json'))
const positiveDescriptors = Object.keys(require('./data/positiveDescriptors.json'))
const techniqueDescriptors = Object.keys(require('./data/techniqueDescriptors.json'))
const extremeDescriptors = Object.keys(require('./data/extremeDescriptors.json'))
const improvementDescriptors = Object.keys(require('./data/improvementDescriptors.json'))
const buzzwords = Object.keys(require('./data/buzzwords.json'))
const measurableEntities = Object.keys(require('./data/measurableEntities.json'))
const mindblowingSentences = Object.keys(require('./data/mindblowingSentences.json'))
const positiveStates = Object.keys(require('./data/positiveStates.json'))

var listData = [
  numericalQuantities,
  positiveDescriptors,
  techniqueDescriptors,
  ['to', 'which will'],
  extremeDescriptors,
  improvementDescriptors,
  ['your use of', 'the way you think about', 'the way you code in',
    'the way you do testing in'],
  programmingLanguages,
  ['forever', 'like never before']
]

var whyData = [
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

var xToYData = [
  ['First you\'ll be'],
  ['shocked,', 'dismayed,', 'appalled,', 'furious,'],
  ['then you\'ll be'],
  positiveStates,
  ['by'],
  ['this one-liner', 'these 2 lines of code', 'this simple trick'],
  ['in'],
  programmingLanguages
]

var howToData = [
  ['It\'s possible!', 'You won\'t believe how this one developer did it.',
    'You\'ll have to see this one line of code to believe it!',
    'These 3 lines of code are all you need!'],
  ['How to'],
  ['speed up your app', 'scale your app', 'raise your MAU',
    'retain users', 'growth-hack your start-up', 'optimise your servers'],
  ['with this one-liner', 'using this simple trick']
]

var controversialData = [[]]

function constructStateChain (states) {
  var startState = new fsmHelper.State('start', states[0])
  var prevState = startState
  for (var i = 1; i < states.length - 1; i++) {
    var currState = new fsmHelper.State('normal', states[i])
    prevState.next = currState
    prevState = currState
  }
  var endState = new fsmHelper.State('end', states[states.length - 1])
  prevState.next = endState
  return startState
}

var allData = [listData, whyData, xToYData, howToData]
const variants = allData.map(constructStateChain)
export default variants
