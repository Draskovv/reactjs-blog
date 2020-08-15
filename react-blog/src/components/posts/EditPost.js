// import React from 'react';
// import moment from 'moment';

// const EditPost = ({post}) => {

//     return (
//         <div className="card z-depth-0 post-summary center">
//         <div className="card-content grey-text text-darken-3">
//             <input className="card-title" value={post.title} />
//             <input className="card-imgUrl" value={post.imgUrl}/>
//             <input className="card-content" value={post.content} />
//             <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
//             <p className="grey-text">{ moment(post.createdAt.toDate()).calendar() }</p>
//         </div>
//     </div>

//     )
// }

// export default EditPost;


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class EditPost extends Component {
    state = {
        title: '',
        content: '',
        imgUrl: '',
        id: this.props.id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editPost(this.state);
    }
    render() {

        const { auth , post} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Edit post</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="imgUrl">Image URL</label>
                        <input type="text" id="imgUrl" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Post Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} required></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn lightblue lighten-1 z-depth-0 right">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (post) => dispatch(editPost(post))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(EditPost)
