import gql from 'graphql-tag';

export const listBooks = gql`
        { 
        books { 
          name 
          id 
          } 
        } 
        `
export const listAuthors = gql`
{
  authors {
    name
    id
  }
}
`
export const addBookMutation = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`