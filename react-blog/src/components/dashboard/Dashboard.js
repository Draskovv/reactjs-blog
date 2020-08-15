import React, { Component } from 'react';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component{
    render(){
        
        const { posts } = this.props; 

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <PostList posts={posts} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts
        //auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(Dashboard); 