import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { actions as commitMessageActions } from '../../redux/modules/commitMessage'
import { TYPES, LANGUAGES, FRAMEWORKS, STACKS } from 'engine'

import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  ...state.commitMessage
})

export class HomeView extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    generateCommitMessage: PropTypes.func.isRequired,
    changeCommitMessageOption: PropTypes.func.isRequired
  };

  changeOption (type, event) {
    this.props.changeCommitMessageOption(type, event.target.value)
  }

  generate () {
    this.props.generateCommitMessage({
      type: this.props.type,
      language: this.props.language,
      framework: this.props.framework,
      stack: this.props.stack
    })
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Commitbait</h1>
        <hr/>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label htmlFor='type'>Type</label>
                  <select id='type'
                    className='form-control'
                    value={this.props.type}
                    onChange={this.changeOption.bind(this, 'type')}>
                    {TYPES.map((type) => {
                      return <option value={type} key={type}>{type}</option>
                    })}
                  </select>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label htmlFor='language'>Language</label>
                  <select id='language'
                    className='form-control'
                    value={this.props.language}
                    onChange={this.changeOption.bind(this, 'language')}>
                    {LANGUAGES.map((language) => {
                      return (
                        <option value={language} key={language}>{language}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label htmlFor='framework'>Framework</label>
                  <select id='framework'
                    className='form-control'
                    value={this.props.framework}
                    onChange={this.changeOption.bind(this, 'framework')}>
                    {FRAMEWORKS.map((framework) => {
                      return (
                        <option value={framework} key={framework}>{framework}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='form-group'>
                  <label htmlFor='stack'>Stack</label>
                  <select id='stack'
                    className='form-control'
                    value={this.props.stack}
                    onChange={this.changeOption.bind(this, 'stack')}>
                    {STACKS.map((stack) => {
                      return (
                        <option value={stack} key={stack}>{stack}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
            </div>
            <pre className={classes.message}>
              {this.props.message}
            </pre>
            <br/>
            <button className='btn btn-primary btn-lg'
              onClick={() => this.generate()}>
              Generate new commit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, commitMessageActions)(HomeView)
