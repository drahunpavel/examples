import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router-dom";

// import HeaderBlock from '../components/HeaderBlock/HeaderBlock';
// import PostsList from '../components/PostsList/PostsList';
import AddForm from '../components/AddForm/AddForm';
// import FullPost from '../components/FullPost/FullPost';
import NotFound from '../components/NotFound/NotFound';

import postsListHOC from '../higherOrderComponent/postsListHOC';
import postHOC from '../higherOrderComponent/postHOC';

const AppRouter = () => {
	return(
        <React.Fragment>
            {/* <HeaderBlock/> */}
            <div className="container">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={postsListHOC} />
                        <Route path="/posts/:id" exact component={postHOC} />
                        <Route path="/posts/:id/edit" exact component={AddForm} />
                        <Route path='*' component={NotFound} />   
                    </Switch>
                </div>
            </div>
        </React.Fragment>
	);
};

export default AppRouter;