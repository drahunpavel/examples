import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FullPost from '../components/FullPost/FullPost';
import {fetchItem} from '../actions/acPostList';
import { compose } from 'C:/Users/Paul/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class postHOC extends PureComponent{

    componentDidMount(){
        const {items, fetchItem , item} = this.props;
        const idx = item && item.url;
        // console.log('---', items, item, idx)
        if(!items){
            fetchItem(items.url);
            console.log('записи нет')
        }; 
    };

    render(){
        
        const {items} = this.props;
        
        return(
            <Fragment>
                <FullPost 
                    items={items && items}
                />
            </Fragment>
        );
    };
};

const mapStateToProps = ({data}, { match }) => ({
    // items: data.items,
    items: data.items && data.items.filter(post => post.url === match.params.id)[0],
    item: match.params.id
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