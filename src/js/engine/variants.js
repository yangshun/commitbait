import { State } from './fsm';

import list from './variants/list';
import why from './variants/why';
import xToY from './variants/xToY';
import howTo from './variants/howTo';

function constructStateChain(states) {
  const startState = new State('start', states[0]);
  let prevState = startState;
  for (let i = 1; i < states.length - 1; i += 1) {
    const currState = new State('normal', states[i]);
    prevState.next = currState;
    prevState = currState;
  }
  const endState = new State('end', states[states.length - 1]);
  prevState.next = endState;
  return startState;
}

const allData = [list, why, xToY, howTo];
const variants = allData.map(constructStateChain);

export default variants;
