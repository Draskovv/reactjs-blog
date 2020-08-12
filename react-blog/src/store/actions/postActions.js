export const createPost = (post) => {
    return (dispatch, getState , {getFirebase , getFirestore}) => {

        dispatch({type: 'ADD_POST', post})
    }
};