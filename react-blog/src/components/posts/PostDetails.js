import React from 'react'

function PostDetails(props) {
    const id = this.props.match.params.id;
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Post title - { id }</span>
                    <p>lorem osajfuhiag ifa wifg awi fgiw qu fq oqwfh qowi qw oifh qwfugyqwf t bqwj qiwy qg qwh qw qiwufhy </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by G</div>
                    <div>01.01.2020, 1m</div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
