import React from 'react';
import { Link } from 'react-router-dom';

import './FullPost.scss';

class FullPost extends React.PureComponent{

    render(){
        const {text, title, createdAt, items} = this.props;
        return(
          !items ? 
          'Loading ...' 
          
          :
            <div className="full-post">
              <div className="container">
                <Link to="/">
                  <button className="btn btn-primary">Back</button>
                </Link>
                <p>{items.title}</p>
                <div className="full-post__details">
                  <i>Posted on {items.createdAt}</i>
                </div>
                <br />
                <p className="full-post__text">{items.text}</p>
              </div>
          </div>
        );
    };
};

FullPost.defaultProps = {
    title: 'defaulr title',
    text: 'test text',
    createdAt: 'дата'
};

export default FullPost;