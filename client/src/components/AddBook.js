import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class AddBook extends React.Component {
  state = {
    bookName: '',
    genre: '',
    authorId: 'b214cb0c039be19200cd428'
  };

  handleAuthorId = e => {
    let authorId = e.target.value;
    this.setState(() => ({ authorId }));
  };

  bookNameHandler = e => {
    let bookName = e.target.value;
    this.setState(() => ({ bookName }));
  };

  bookGenreHandler = e => {
    let genre = e.target.value;
    this.setState(() => ({ genre }));
  };

  render() {
    return (
      <div>
        <div>
          {this.state.bookName}
          {this.state.authorId}
          {this.state.genre}
        </div>
        <form id="add-book" onSubmit={this.addBook}>
          <div className="field">
            <label>Book name:</label>
            <input
              value={this.state.bookName}
              type="text"
              onChange={this.bookNameHandler}
            />
          </div>

          <div className="field">
            <label>Genre:</label>
            <input
              type="text"
              value={this.state.genre}
              onChange={this.bookGenreHandler}
            />
          </div>

          <button>+</button>
        </form>

        <select onChange={this.handleAuthorId}>
          <Query
            query={gql`
              {
                authors {
                  name
                  id
                }
              }
            `}
          >
            {({ loading, error, data }) => {
              if (loading) return 'Loading....';
              if (error) return 'ERROR!!!';

              return data.authors.map(auth => (
                <option key={auth.id} value={auth.id}>
                  {auth.name}
                </option>
              ));
            }}
          </Query>
        </select>
      </div>
    );
  }
}

export default AddBook;
