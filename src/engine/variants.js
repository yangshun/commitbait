const fsmHelper = require('./fsm')

import list from './variants/list'
import why from './variants/why'
import xToY from './variants/xToY'
import howTo from './variants/howTo'

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

const allData = [list, why, xToY, howTo]
const variants = allData.map(constructStateChain)
export default variants
