import React from 'react'
import { Link } from 'react-router-dom';

const Post = () => {

    return(
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <Link to={`/posts/1`} exact>Test</Link>
            </h5>
            <small>Post Id: 1</small>
          </div>
          <p className="mb-1">
            desc
          </p>
          <small>UserId: #1</small>
        </div>
      </div>
    )
}

export default Post;