import React from 'react';
import { Link } from 'react-router-dom';

import './AddForm.scss';

const AddForm = () => {
    return (
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
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default AddForm;