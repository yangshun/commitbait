var fsmGenerator = require('./fsm');
import variants from './variants';

export function generate () {
  var fsm = initialise();
  return fsm.run();
}

function initialise () {
  var fsm = new fsmGenerator.FSM();
  for (var i = 0; i < variants.length; i++) {
    var startState = variants[i];
    fsm.addStartState(startState);
  }
  return fsm;
}
