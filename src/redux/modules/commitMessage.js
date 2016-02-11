import { createAction, handleActions } from 'redux-actions'
import { generate } from 'engine'
import hashCode from 'redux/utils/hashCode'

// ------------------------------------
// Constants
// ------------------------------------
export const GENERATE_COMMIT_MESSAGE = 'GENERATE_COMMIT_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export const generateCommitMessage = createAction(GENERATE_COMMIT_MESSAGE, () => {})

export const delayedGeneration = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(generateCommitMessage())
    }, 1000)
  }
}

export const actions = {
  generateCommitMessage,
  delayedGeneration
}

const HASH_LENGTH = 40;

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [GENERATE_COMMIT_MESSAGE]: (state, { payload }) => {
    return Object.assign({}, state, {
      message: generate(),
      hash: hashCode(HASH_LENGTH)
    })
  }
}, {
  message: generate(HASH_LENGTH),
  hash: hashCode(40)
})
