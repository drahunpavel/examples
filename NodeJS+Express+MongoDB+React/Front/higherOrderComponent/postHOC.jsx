import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FullPost from '../components/FullPost/FullPost';
import {fetchItem} from '../actions/acPostList';

class postHOC extends PureComponent{

    componentDidMount(){
        const {items, fetchItem} = this.props;
        const {id} = this.props.match.params;

        const itemID = items.filter((post) => post.url === id)[0]; //получаю нужный мне id

        if(itemID){
            fetchItem(itemID.url);
        }; 
    };

    render(){
        
        const {item} = this.props;
        
        return(
            <Fragment>
                <FullPost 
                    item={item && item}
                />
            </Fragment>
        );
    };
};

const mapStateToProps = ({data}) => ({
    items: data.items,
    item: data.item
});
const mapDispatchToProps = {
    fetchItem
};

postHOC.propTypes = {
    items: PropTypes.array,
};

export default withRouter(
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
(postHOC));