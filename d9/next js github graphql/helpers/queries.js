export const getRepositoriesFromSearch = query => {
  return `{
    search(query: "${query}", type: REPOSITORY, first: 30) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            owner {
              login
              avatarUrl
            }
            stargazerCount
          }
        }
      }
    }
  }`
}

export const getDetails = query => {
  return `{
    repository(name: "front-end_portfolio", owner: "AndriiChemerys") {
      description
      homepageUrl
    }
  }`
}