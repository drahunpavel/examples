import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';

import './PostItem.scss';

// const PostItem = ({ title, createdAt, _id, onRemove }) => (
//   <div className="post-item">
//     {/* <Link to={`/post/${_id}`}>
//       <h2>{title}</h2>
//     </Link> */}
//     <p>
//       <i>Posted on {createdAt}</i>
//       <a href="javascript://" onClick={onRemove.bind(this, _id)}>
//         Remove
//       </a>
//       {/* <Link to={`/post/${_id}/edit`}>Edit</Link> */}
//     </p>
//   </div>
// );


class PostItem extends PureComponent{
    render(){

        const {
            title, 
            createdAt, 
            id, 
            onRemove
        } = this.props;

        return(
            <div className="post-item">
                <h2>{title}</h2>
                <p>
                    <i>Posted on {createdAt}</i>
                    <a>Remove</a>
                    <a>Edit</a>
                </p>
            </div>
        );
    };
};

PostItem.defaultProps = {
    title: 'test title',
    createdAt: null,
    id: 'id',
    onRemove: null
}

export default PostItem;