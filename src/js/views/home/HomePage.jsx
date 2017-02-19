import React, { PropTypes, Component } from 'react';
import DocumentTitle from 'react-document-title';

import { connect } from 'react-redux';

import { generateCommit } from 'actions/commit';

class HomePage extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    message: PropTypes.string,
    branch: PropTypes.string,
    hash: PropTypes.string,
    generateCommit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    message: '',
    branch: '',
    hash: '',
  };

  componentDidMount() {
    this.props.generateCommit();
  }

  render() {
    return (
      <DocumentTitle title="Commitbait">
        <div className="content">
          <h1 className="title">
            <i className="fa fa-terminal"/> <span className="subject">Commit</span>bait
          </h1>
          <hr/>
          <div className="message-container">
            <h2 className="message">{this.props.loading ? 'Baiting...' : this.props.message}</h2>
            <p className={`meta ${this.props.loading ? 'loading' : ''}`}>
              <span className="branch"><i className="fa fa-lg fa-code-fork"/> {this.props.branch}</span><br/>
              <span className="commit"><span className="commit-text">commit</span> &nbsp; {this.props.hash}</span>
            </p>
          </div>
          <br/>
          <button className="generate-btn"
            onClick={() => {
              this.props.generateCommit();
            }}
            disabled={this.props.loading}
          >
            Bait me again
          </button>
          <br/><br/><br/>
          <p>Inspired by this <a href="http://www.commitstrip.com/en/2014/08/07/our-cto-has-discovered-an-incredible-way-of-making-developers-read-his-commit-messages-you-wont-even-believe-how-he-did-it/" target="_blank" rel="noopener noreferrer">
            CommitStrip comic</a> and <a href="https://github.com/cmcculloh/commit-clickbait" target="_blank" rel="noopener noreferrer">commit-clickbait</a>.
            Made by <a href="https://github.com/yangshun" target="_blank" rel="noopener noreferrer">@yangshun</a> and <a href="https://github.com/karen" target="_blank" rel="noopener noreferrer">@karen</a>.
          </p>
          <div>
            <a className="twitter-share-button" href="https://twitter.com/share" data-url="http://yangshun.im/commitbait" data-text="One weird trick to get people to read your commit messages!">Tweet</a>
            <div className="fb-share-button" data-href="http://yangshun.im/commitbait" data-layout="button"/>
            <span className="source">
              Source on <a href="https://github.com/yangshun/commitbait" target="_blank" rel="noopener noreferrer">Github</a>. Contributions are welcome! <br/>
            </span>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.commit,
  };
}

export default connect(
  mapStateToProps,
  {
    generateCommit,
  },
)(HomePage);
