const initState = {
    posts: [
        {id: '1' , title: 'Post 1 title', content: 'Post 1 content'},
        {id: '2' , title: 'Post 2 title', content: 'Post 2 content'},
        {id: '3' , title: 'Post 3 title', content: 'Post 3 content'}
    ]
};

const postReducer = (state = initState, action) => {
    return state
}

export default postReducer;