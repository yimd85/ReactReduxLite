import React, { Component } from 'react';
// lodash maps over objects as opposted to arrays
import _ from 'lodash';
import { Link } from 'react-router-dom';

//wiring up action creator
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
          return (
            <li className="list-group-item" key={post.id}>
                    {post.title}
            </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a Post!
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

//whenever we want to consume application level state we alway use mapstatetoprops
function mapStateToProps(state) {
    return { posts: state.posts };
}

//wiring up action creator
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
//
