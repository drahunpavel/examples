import React, { PureComponent } from 'react';
import PostItem  from '../PostItem/PostItem';

import './PostsList.scss';

class PostsList extends PureComponent {

  render() {

    const {
      items,
      onRemove,
    } = this.props;

    return (
      <div className="post-items">
        {
          items ? items.map(post => 
            <PostItem 
              key={post._id} 
              {...post} 
              onRemove={onRemove} 
            />
            ) 
            : 
            'Loading...'
        }
      </div>
    );
  };
};

PostsList.defaultProps = {
  items: null,
  onRemove: console.log('---onRemove')
}

export default PostsList;