import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    return(
        <ul className=" nav-list right">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><NavLink to='/my-posts'>My Posts</NavLink></li>
            <li><a href="/#" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating lightblue lighten-1">
                {props.profile.initials}
                </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null , mapDispatchToProps)(SignedInLinks);