import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

class PostItem extends PureComponent{
    render(){

        const {
            title, 
            url,
            createdAt, 
            text,
            _id, 
            onRemove,
            items_id
        } = this.props;
        console.log(url)
        return(
            <div className="post-item">
                <Link to={`/post/${url}`}>
                    <h2>{title}</h2>
                </Link>
                <p>{text}</p>
                <p>
                    <i>Posted on {createdAt}</i>
                    <Link to='#' onClick={onRemove.bind(this, url)}>Remove</Link>
                    <Link to={`/post/${url}/edit`}>Edit</Link>
                </p>
            </div>
        );
    };
};

PostItem.defaultProps = {
    title: 'test title',
    createdAt: null,
    _id: 'id',
    onRemove: null
}

export default PostItem;