import { createAction, handleActions } from 'redux-actions'
import { generate } from 'engine'

// ------------------------------------
// Constants
// ------------------------------------
export const GENERATE_COMMIT_MESSAGE = 'GENERATE_COMMIT_MESSAGE'
export const CHANGE_COMMIT_MESSAGE_OPTION = 'CHANGE_COMMIT_MESSAGE_OPTION'

// ------------------------------------
// Actions
// ------------------------------------
export const generateCommitMessage = createAction(GENERATE_COMMIT_MESSAGE, (options = {}) => options)
export const changeCommitMessageOption = createAction(CHANGE_COMMIT_MESSAGE_OPTION, (type, value) => { return { type, value } })

export const actions = {
  generateCommitMessage,
  changeCommitMessageOption
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [GENERATE_COMMIT_MESSAGE]: (state, { payload }) => {
    return Object.assign({}, state, {
      message: generate(payload)
    })
  },
  [CHANGE_COMMIT_MESSAGE_OPTION]: (state, { payload }) => {
    return Object.assign({}, state, {
      [payload.type]: payload.value
    })
  },
}, {
  message: generate(),
  type: 'ANY',
  language: 'ANY',
  framework: 'ANY',
  stack: 'ANY'
})
