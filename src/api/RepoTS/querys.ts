import {gql} from "@apollo/client";

export const repoTs = (count = 10) =>{
    return gql`
 {
  search(query: "language:TypeScript sort:stars ", type: REPOSITORY, first: ${count}) {
    edges {
      node {
        ... on Repository {
          name
          forkCount
          description
          url
          owner {
            avatarUrl
            login
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`;
}