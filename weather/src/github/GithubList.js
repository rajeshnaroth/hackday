import React, { Component } from 'react';
import { GET_REPOS } from './actions';
import { initialRepos, repoReducer } from './state';

class Weather extends Component {
  state = initialRepos(this.props);

  async dispatch(action) {
    const updatedState = await repoReducer(this.state, action);
    console.log(updatedState);

    this.setState(updatedState);
  }

  reloadData = () => {
    this.dispatch({
      type: GET_REPOS,
      data: {
        search: this.state.search
      }
    });
  };

  componentDidMount() {
    this.reloadData();
  }

  render() {
    // let repos =
    return (
      <ul>
        {this.state.repos.map(repo => (
          <li key={repo.id}>
            {repo.name} {repo.owner}
          </li>
        ))}
      </ul>
    );
  }
}

export default Weather;
