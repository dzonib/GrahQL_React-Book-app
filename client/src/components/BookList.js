import React from 'react';
import {Query} from 'react-apollo'
import {listBooks} from '../queries/queries'

const BookList = () => {
  return (
    <div>
      <Query query={listBooks}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading....</p>
          if (error) return  <p>ERROR!!!</p>

          return data.books.map( book => 
            <li key={book.id}>
              {book.name}
            </li>
          )
        }}
        </Query>
      <div>
        <p>Hi</p>
      </div>
    </div>
  )
}

export default BookList
