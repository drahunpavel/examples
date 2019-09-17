import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

class FullPost extends React.PureComponent{

    render(){
        console.log('--', this.props)
        const {text, createdAt} = this.props;
        return(
            <div className="full-post">
            <div className="container">
              <Link to="/">
                <button className="btn btn-primary">Back</button>
              </Link>
              <div className="full-post__details">
                <i>Posted on {createdAt}</i>
              </div>
              <br />
              <p className="full-post__text">{text}</p>
            </div>
          </div>
        );
    };
};

FullPost.defaultProps = {
    text: 'test text',
    createdAt: 'дата'
};

export default FullPost;