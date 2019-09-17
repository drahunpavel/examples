import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostsList from '../components/PostsList/PostsList';
import {fetchItems, setItems, fetchRemoveItem} from '../actions/acPostList';

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
                    onRemove={this.props.fetchRemoveItem}
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
    setItems,
    fetchRemoveItem
};

postsListHOC.propTypes = {
    items: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(postsListHOC);