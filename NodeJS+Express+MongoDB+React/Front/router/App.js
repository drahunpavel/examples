import React, { PureComponent } from 'react';

import HeaderBlock from '../components/HeaderBlock/HeaderBlock';
import PostsList from '../components/PostsList/PostsList';
import AddForm from '../components/AddForm/AddForm';

class App extends PureComponent{

    render(){
        return(
            <div>
                <HeaderBlock/>
                <AddForm/>
                <div className="container">
                    <div className='content'>
                        <PostsList/>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;