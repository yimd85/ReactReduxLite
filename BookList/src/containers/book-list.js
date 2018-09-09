import React, { Component } from 'react';
//step 1 in connecting a container (smart component to redux aka application state)
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';


class FuckenBookList extends Component {
    renderList() {
      // console.log(this.props.asdf); --> '123'
        return this.props.hooks.map((dumbass) => {
            return(
                <li 
                    className='list-group-item'
                    key={dumbass.title}
                    onClick={() => this.props.selectBook(dumbass)}
                >
                    {dumbass.title}
                </li>
            )
        })
    }
  render() {
    return (
      <ul
        className="list-group col-sm-6"
      >
        {this.renderList()}
      </ul>
    );
  }
}


function mapStateToProps(state){
  // console.log(state);
  // whatever gets returned from here will get returnsed as props inside FuckenBookList
  //this is the KEY funciton that will connect the reducers to components

  //step 2: since the reducer acts like a global state and available, we will need to return as that application state as props
  //the mapStateToProps acts like a glue between react and redux 
  return{
    // asdf: '123'
    hooks: state.books //state.books from reducer-books.js as books. need to call it using 'state.' to get the right one
  }
}

//Anything returned from this function will end up as props on the FuckenBookList containers
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch );
}

//step 3: the connect takes a function and a component and produces a container
//a container is a component that is aware of the state that is within redux


//Promotion BookList form a componnet to a containers - it needs to know about this new dispatch method selectBook. Make it available as a props
export default connect(mapStateToProps, mapDispatchToProps)(FuckenBookList);

//if the application state is updated through our reducer, the container component will rerender