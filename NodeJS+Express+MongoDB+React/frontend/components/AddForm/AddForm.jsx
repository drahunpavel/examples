import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './AddForm.scss';

class AddForm extends React.PureComponent{

    funcClick = () => {
        axios.patch (`http://localhost:3000/posts/5d82b11d1c9d4400003f6352`, {title: '11111xXXXXXXXXXXXX111111111'})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    };

    render(){
        return(
            <form className="add-form">
            <Link to="/">
                <button className="btn btn-primary">Back</button>
            </Link>
            <div className="form-group">
                <div className="add-form__row">
                    <h4>
                        <label htmlFor="title">Title</label>
                    </h4>
                    <input type="text" className="form-control" id="title" placeholder="title" />
                </div>
                <div className="add-form__row">
                    <h4>
                        <label htmlFor="imageUrl">Image URL</label>
                    </h4>
                    <input type="text" className="form-control" id="imageUrl" placeholder="Enter image URL" />
                </div>
                <div className="add-form__row">
                    <h4>
                        <label htmlFor="text">Description</label>
                    </h4>
                    <textarea rows="8" className="form-control" placeholder="Enter text" id="text" />
                </div>
            </div>
            {/* <button onClick={this.funcClick} type="submit" className="btn btn-primary">
                Submit
            </button> */}
                {/* <button className="btn btn-primary">Submit</button> */}
                <input onClick={this.funcClick} type='button' value='Submit'></input>
            
        </form>
        );
    };

};

export default AddForm;