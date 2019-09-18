import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

class PostItem extends PureComponent{
    render(){

        const {
            createdAt,
            imageUrl,
            text,
            title,
            updatedAt,
            _id,
            onRemove
        } = this.props;

        return(
            <div className="post-item">
                <Link to={`/posts/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p>{text}</p>
                <img src={imageUrl}/>
                <p>
                    <i>Posted on {createdAt}</i>
                    <Link to='#' onClick={onRemove.bind(this, _id)}>Remove</Link>
                </p>
                <p>
                    <Link to={`/posts/${_id}`}>Edit</Link>
                </p>
            </div>
        );
    };
};

PostItem.defaultProps = {
    // title: 'test title',
    // createdAt: null,
    // _id: 'id',
    // onRemove: null
}

export default PostItem;