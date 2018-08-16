import React, { Component } from 'react';
import { GET_REPOS, UPDATE_SEARCH } from './actions';
import { initialRepos, repoReducer } from './state';
import Repo from './Repo';
import GitHubForm from './GithubForm';

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

  updateSearch = event => {
    this.dispatch({
      type: UPDATE_SEARCH,
      data: {
        search: event.target.value
      }
    });
  };

  componentDidMount() {
    this.reloadData();
  }

  render() {
    // let repos =
    return (
      <section>
        <GitHubForm
          search={this.state.search}
          updateSearch={this.updateSearch}
          reloadData={this.reloadData}
        />
        <div className="repolist">
          {this.state.repos.map(repo => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </div>
      </section>
    );
  }
}

export default Weather;
