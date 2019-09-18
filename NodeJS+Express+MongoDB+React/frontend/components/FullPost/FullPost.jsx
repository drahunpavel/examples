import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

class FullPost extends React.PureComponent{

    render(){
        const {item} = this.props;

        return(
          !item ? 
          'Loading ...' 
          :
            <div className="full-post">
              <div className="container">
                <Link to="/">
                  <button className="btn btn-primary">Back</button>
                </Link>
                <p>{item.title}</p>
                <div className="full-post__details">
                  <i>Posted on {item.createdAt}</i>
                </div>
                <br />
                <p className="full-post__text">{item.text}</p>
                <img src={item.imageUrl}/>
              </div>
          </div>
        );
    };
};

// FullPost.defaultProps = {
//     title: 'defaulr title',
//     text: 'test text',
//     createdAt: 'дата'
// };

export default FullPost;