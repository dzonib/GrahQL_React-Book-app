import React from 'react';
import {Query, Mutation} from 'react-apollo';
import {listAuthors, addBookMutation, listBooks} from '../queries/queries';


class AddBook extends React.Component {
  state = {
    bookName: '',
    genre: '',
    authorId: 'b214cb0c039be19200cd428'
  };

  handleAuthorId = e => {
    let authorId = e.target.value;
    this.setState(() => ({authorId}));
  };

  bookNameHandler = e => {
    let bookName = e.target.value;
    this.setState(() => ({bookName}));
  };

  bookGenreHandler = e => {
    let genre = e.target.value;
    this.setState(() => ({genre}));
  };

  render() {
    return (
      <div>

        <Mutation mutation={addBookMutation}>
          {(addBook, {data}) => (
            <form
              id="add-book"
              onSubmit={e => {
              e.preventDefault();
              addBook({
                variables: {
                  name: this.state.bookName,
                  genre: this.state.genre,
                  authorId: this.state.authorId
                },
                refetchQueries: [{query: listBooks}]
              })
            }}>
              <div className="field">
                <label>Book name:</label>
                <input value={this.state.bookName} type="text" onChange={this.bookNameHandler}/>
              </div>

              <div className="field">
                <label>Genre:</label>
                <input type="text" value={this.state.genre} onChange={this.bookGenreHandler}/>
              </div>

              <button type="submit">+</button>
            </form>
          )
}
        </Mutation>

        <select onChange={this.handleAuthorId}>
          <Query query={listAuthors}>
            {({loading, error, data}) => {
              if (loading) 
                return 'Loading....';
              if (error) 
                return 'ERROR!!!';
              
              return data
                .authors
                .map(auth => (
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
