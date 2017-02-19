// @flow
import sample from 'lodash/sample';
import generate from 'engine';
import hashCode from 'utils/hash-code';
import branches from 'data/branches.json';

const HASH_LENGTH = 40;

export const GENERATE_COMMIT_LOADING = 'GENERATE_COMMIT_LOADING';
export const GENERATE_COMMIT_SUCCESS = 'GENERATE_COMMIT_SUCCESS';

export function generateCommit() {
  return (dispatch) => {
    dispatch({
      type: GENERATE_COMMIT_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: GENERATE_COMMIT_SUCCESS,
        payload: {
          message: generate(),
          branch: sample(branches.data),
          hash: hashCode(HASH_LENGTH),
        },
      });
    }, Math.floor((Math.random() * 500) + 500)); // https://uxmag.com/articles/let-your-users-wait
  };
}
