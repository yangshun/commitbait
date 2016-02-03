var fsmGenerator = require('./fsm')
import variants from './variants'

const defaultOptions = {
  type: 'ANY',
  language: 'ANY',
  framework: 'ANY',
  stack: 'ANY'
}

export const TYPES = [
  'ANY', 'BUG', 'FEATURE', 'REFACTOR', 'DOCUMENTATION', 'TEST'
]

export const LANGUAGES = [
  'ANY', 'SWIFT', 'OBJECTIVE-C', 'RUBY', 'PYTHON', 'JAVASCRIPT', 'CSS', 'HTML', 'JAVA', 'C++', 'PHP', 'GO'
]

export const FRAMEWORKS = [
  'ANY', 'RAILS', 'DJANGO', 'NODE', 'JQUERY', 'ANGULAR', 'REACT', 'BACKBONE', 'BOOTSTRAP'
]

export const STACKS = [
  'ANY', 'FRONT_END', 'BACK_END', 'PLATFORM', 'MOBILE', 'DATABASE'
]

export function generate (options = defaultOptions) {
  var fsm = initialise()
  return fsm.run()
}

function initialise () {
  var fsm = new fsmGenerator.FSM()
  for (var i = 0; i < variants.length; i++) {
    var startState = variants[i]
    fsm.addStartState(startState)
  }
  return fsm
}
