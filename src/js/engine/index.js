import { FSM } from './fsm';
import variants from './variants';

function initialise() {
  const fsm = new FSM();
  for (let i = 0; i < variants.length; i += 1) {
    const startState = variants[i];
    fsm.addStartState(startState);
  }
  return fsm;
}

export default function generate() {
  return initialise().run();
}
