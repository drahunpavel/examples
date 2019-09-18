import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FullPost from '../components/FullPost/FullPost';
import {fetchItem} from '../actions/acPostList';

class postHOC extends PureComponent{

    state = {
        oldData: null
    };

    componentDidMount(){
        const {
            items, 
            fetchItem , 
            itemID
        } = this.props;

        if(!items){
            fetchItem(itemID);
        }else{
            const oldData = items.filter(post => post._id === itemID)[0];
            this.setState({
                oldData: oldData
            })
        }
    };

    render(){
        
        const {item} = this.props;
        const {oldData} = this.state;

        return(
            <Fragment>
                <FullPost 
                    item={oldData ? oldData : item}
                />
            </Fragment>
        );
    };
};

const mapStateToProps = ({data}, { match }) => ({
    items: data.items,
    item: data.item,
    itemID: match.params.id //записывает ид с урла
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