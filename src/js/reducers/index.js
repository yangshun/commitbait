// @flow
import type { FSA } from 'redux';
import type { CommitState } from 'reducers/commit';

import { routerReducer } from 'react-router-redux';
import commit from 'reducers/commit';

export type StoreState = {
  commit: CommitState,
  routing: Object,
};

// $FlowFixMe: Delegate the individual reducer defaults to respective reducers.
export default function (state: StoreState = {}, action: FSA): StoreState {
  return {
    commit: commit(state.commit, action),
    routing: routerReducer(state.routing, action),
  };
}
