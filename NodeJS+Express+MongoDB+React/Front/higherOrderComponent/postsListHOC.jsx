import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostsList from '../components/PostsList/PostsList';
import {fetchItems, setItems} from '../actions/acPostList';

class postsListHOC extends PureComponent{

    componentDidMount(){
        const {fetchItems} = this.props;
        fetchItems();
    };

    render(){
        return(
            <Fragment>
                <PostsList 
                    items={this.props.items}
                />
            </Fragment>
        );
    };
};

const mapStateToProps = ({data}) => ({
    items: data.items,
});
const mapDispatchToProps = {
    fetchItems,
    setItems
};

postsListHOC.propTypes = {
    items: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(postsListHOC);