import { GET_REPOS, UPDATE_SEARCH } from './actions';
import { getRepos } from './api';

const initialRepos = props => {
  return {
    repos: [],
    search: props.search || props.match.params.search || 'react'
  };
};

async function repoReducer(state, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_REPOS:
      let repos = await getRepos(action.data.search);
      newState.repos = repos;
      break;
    case UPDATE_SEARCH:
      newState.search = action.data.search;
      break;
    default:
      throw new Error('No action provided');
  }

  return Promise.resolve(newState);
}

export { initialRepos, repoReducer };
