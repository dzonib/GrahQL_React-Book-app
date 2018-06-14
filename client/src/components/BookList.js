import React from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

const BookList = props => {
  return (
    <div>
      <Query query={gql`
        { 
        books { 
          name 
          id 
          } 
        } 
        `}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading....</p>
          if (error) return  <p>ERROR!!!</p>

          console.log(data)
          return 'It works :)'
        }}
        </Query>
      <div>
        <p>Hi</p>
      </div>
    </div>
  )
}

export default BookList
