import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
      <li key={book.title} className="list-group-item">{book.title}</li>
    );
  });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

//Anything return from this function will end up as props on the BookList container

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote bookList from a Component to a container - it needs to know ablout this new dispatch m
//method, selectBook. Make it availanle as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
