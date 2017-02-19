export function State(type, data) {
  this.type = type;
  this.data = data;
}

State.prototype = {
  constructor: State,
  getKeyword() {
    const index = Math.floor(Math.random() * this.data.length);
    return this.data[index];
  },
};

export function FSM() {
  this.startStates = [];
}

FSM.prototype = {
  constructor: FSM,
  addStartState(state) {
    this.startStates.push(state);
  },
  run() {
    const index = Math.floor(Math.random() * this.startStates.length);
    let currState = this.startStates[index];
    let result = '';
    while (currState.type !== 'end') {
      result += ['.', ',', '!', '?'].indexOf(currState.getKeyword()[0]) > -1 ? '' : ' ';
      result += currState.getKeyword();
      currState = currState.next;
    }
    result += ` ${currState.getKeyword()}`;
    return `${result}.`;
  },
};
