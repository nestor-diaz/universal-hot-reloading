import React, { Component } from 'react';
import styles from './App.css';
import { connect } from 'react-redux';
// import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Child from './Child';

class App extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demo 1</h1>
        <p>{count.num}</p>
        <button
          className={styles.increment}
          onClick={() => dispatch({type: "INC"})}
        >
          +1
        </button>
        <Child />
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => ({count: state}))(App);
// export default hot(module)( connect(state => ({count: state}))(App) );
