import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { actions as commitMessageActions } from '../../redux/modules/commitMessage'

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
    hash: PropTypes.string.isRequired,
    delayedGeneration: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  componentWillReceiveProps () {
    this.setState({
      loading: false
    })
  }

  render () {
    return (
      <div>
        <div className='content'>
          <h1 className='title'><span className='subject'>Commit</span>bait</h1>
          <hr/>
          <div className='message-container'>
            <h2 className='message'>{this.state.loading ? 'Baiting...' : this.props.message}</h2>
            <p className={`meta ${this.state.loading ? 'loading' : null}`}>
              <span className='branch'><i className='fa fa-lg fa-code-fork'/> master</span><br/>
              <span className='commit'><span className='commit-text'>commit</span> &nbsp; {this.props.hash}</span>
            </p>
          </div>
          <br/>
          <button className='generate-btn'
            onClick={() => {
              this.setState({
                loading: true
              })
              this.props.delayedGeneration()
            }}
            disabled={this.state.loading}>
            Bait me again
          </button>
          <br/><br/><br/>
          <p>Inspired by this <a target='_blank' href='http://www.commitstrip.com/en/2014/08/07/our-cto-has-discovered-an-incredible-way-of-making-developers-read-his-commit-messages-you-wont-even-believe-how-he-did-it/'>
            CommitStrip comic</a>. Made by <a href='https://github.com/yangshun' target='_blank'>Tay Yang Shun</a> and <a href='https://github.com/karenang' target='_blank'>Karen Ang</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, commitMessageActions)(HomeView)
