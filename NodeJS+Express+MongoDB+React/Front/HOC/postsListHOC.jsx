import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import PostsList from '../components/PostsList/PostsList';
import PostsListActions from '../actions/action';

class postsListHOC extends PureComponent{

    componentDidMount(){
        console.log('компонент создан')
        const {fetchItems} = PostsListActions;
        fetchItems();
    };

    render(){
        return(
            <Fragment>
                <PostsList/>
            </Fragment>
        );
    };
};

const mapStateToProps = ({data}) => ({
    items: data.item ? data.item : null,
});
const mapDispatchToProps = PostsListActions;
// ApplicationForAcceptance.propTypes = {
//     data: PropTypes.array,
//     item: PropTypes.object,
//     meta: PropTypes.object,
//     updateVisible: PropTypes.bool,
//     selectedRow: PropTypes.number,
//     selectedRows: PropTypes.array,
//     selectedRowsFullinformation: PropTypes.array,
//     selectRowDebetCredit:PropTypes.object
// };


export default connect(mapStateToProps, mapDispatchToProps)(postsListHOC);