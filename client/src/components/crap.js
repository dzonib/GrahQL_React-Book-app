import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

class BookList extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="main">

        <div>
          <ul id="book-list">
            {/* {this.props.penis.map( tuki => <li>{tuki.currency}</li>)} */}
          </ul>
        </div>

      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
