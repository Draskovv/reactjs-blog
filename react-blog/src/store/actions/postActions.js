export const createPost = (post) => {
    return (dispatch, getState , {getFirebase , getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_POST', post})
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ERROR', err})
        })
    }
};

export const deletePost = id => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      
      firestore.collection('posts').doc(id)
        .delete()
        .then(() => {
          dispatch({ type: 'DELETE_POST', id })
        }).catch(err => {
          dispatch({ type: 'DELETE_POST_ERROR', err })
      })
    }
};

export const editPost = (post) =>{
  return (dispatch, getState , {getFirebase , getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('posts').doc(post.id).update({
      ...post
    }).then(() => {
        dispatch({type: 'EDIT_POST_SUCCESS', post})
    }).catch((err) => {
        dispatch({type: 'EDIT_POST_ERROR', err})
    })
}
};