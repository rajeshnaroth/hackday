function getRepos(search) {
  return fetch(`https://api.github.com/search/repositories?q=${search}`)
    .then(res => res.json())
    .then(wData =>
      wData.items.map(r => ({
        id: r.id,
        name: r.name,
        description: r.description,
        owner: r.owner.login,
        thumbnail: r.owner.avatar_url
      }))
    );
}

export { getRepos };
