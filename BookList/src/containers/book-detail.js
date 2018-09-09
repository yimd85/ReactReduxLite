import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        if(!this.props.shitty){
            return (
                <div>
                    <h3>Details for: </h3>
                    <div>Select a book to get started</div>
                </div>
            );
        }


        return (
            <div>
                <h3>Details for: </h3>
                <div>{this.props.shitty.title}</div>
                <div>pages: {this.props.shitty.pages}</div>
            </div>
        );
    }
}

//hook the container to the redux store


//state is the application state
function mapStateToProps(state){
    return{
        shitty: state.activeBook
    }
  }


  export default connect(mapStateToProps)(BookDetail);


  //1 create container
  //2 create a mapStateToProps
  //3 export default mapStateToProps with Container Component