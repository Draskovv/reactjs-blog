import React, {useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deletePost} from '../../store/actions/postActions';
import moment from 'moment';
import EditPost from './EditPost';
 

function PostDetails(props) {

    const [count, setCount] = useState(0);
    
    function handleDelete (e){
        const { id } = props;
        e.preventDefault();
        props.deletePost(id);
        props.history.push('/');
    }

    const {post , auth , id} = props;

    if(post){
        if(post.authorId === auth.uid){

            if (count % 2 === 1){
                return(
                    <EditPost post={post} id={id}/>
                )
            }
            else{
                return(
                    <div className="container section post-details">
                        <div className="card z-depth-0">
                            <div className="card-content center">
                                <img src={post.imgUrl} alt=""/>
                                <span className="card-title">{ post.title }</span>
                                <p>{ post.content }</p>
                            </div>
                            <div className="card-action grey lighten-4 grey-text center">
                            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                                <div>{ moment(post.createdAt.toDate()).calendar() }</div>
                            </div>
                        </div>
                        <div className="input-field">
                            <button onClick={() => setCount(count + 1 )} className="btn lightblue lighten-1 z-depth-0 right">Edit</button>
                            <button onClick={handleDelete} className="btn lightblue lighten-1 z-depth-0 right">Delete</button>
                        </div>
                        
                    </div>
                    )
            }
            
        }
        else
        {
            return(
                <div className="container section post-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{ post.title }</span>
                            <img src={post.imgUrl} alt="" className="right" />
                            <p>{ post.content }</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                        <div> { moment(post.createdAt.toDate()).calendar() } </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
    else{
        return (
            <div className='container  center'>
                <p>Loading post...</p>
            </div>
        )
    }
   
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;

    return {
        post: post,
        id:id,
        auth: state.firebase.auth
    }
}

const mapDistpacthToProps = dispatch => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}
export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([
        {collection: 'posts'}
    ])
)(PostDetails)
