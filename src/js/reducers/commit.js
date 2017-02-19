// @flow
import type { FSA } from 'redux';

import {
  GENERATE_COMMIT_LOADING,
  GENERATE_COMMIT_SUCCESS,
} from 'actions/commit';

export type CommitState = {
  loading: boolean,
  message?: string,
  branch?: string,
  hash?: string,
};
export const defaultCommitState: CommitState = {
  loading: false,
  message: 'Foo bar',
  branch: 'master',
  hash: 'abcd',
};

function commit(state: CommitState = defaultCommitState, action: FSA): CommitState {
  switch (action.type) {
    case GENERATE_COMMIT_LOADING:
      return {
        loading: true,
      };
    case GENERATE_COMMIT_SUCCESS:
      return {
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default commit;
