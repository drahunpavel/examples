import React, { PureComponent } from 'react';
import PostItem  from '../PostItem/PostItem';

import './PostsList.scss';

// const PostsList = ({ items, onRemove }) => {
//   return (
//     <div className="post-items">
//       {items ? items.map(post => <PostItem {...post} onRemove={onRemove} />) : 'Loading...'}
//     </div>
//   );
// };

const items = [
  {
    "_id": "5c1d62f0014f4e3fd55cf3a1",
    "title": "Title 0",
    "text": "Aliquip commodo anim consequat aute. Non ut tempor non ea pariatur occaecat veniam non minim pariatur deserunt aliquip sit esse. Voluptate culpa velit cupidatat ut enim esse duis sunt proident dolore. Amet aliquip dolore et ullamco commodo. Eu velit aliqua do nostrud esse consequat sunt laborum aute tempor.",
    "createdAt": "Sun Sep 30 2007 22:27:28 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f09c77e30429095467",
    "title": "Title 1",
    "text": "Eu do ipsum fugiat do. Cillum exercitation consequat pariatur aute culpa ea quis ex. Non tempor pariatur qui tempor aute. Dolore nisi sint irure sint id in voluptate duis nisi veniam. Esse anim dolore non ad pariatur nostrud ad commodo sunt ea esse cillum excepteur voluptate.",
    "createdAt": "Sat Jul 28 1984 19:49:29 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f020fdb88dfbb5985d",
    "title": "Title 2",
    "text": "In aliquip irure ex esse sunt do tempor eu aliquip sunt ut sunt nulla. Commodo fugiat nulla commodo ea veniam ex exercitation in exercitation commodo in veniam deserunt magna. Qui ipsum dolore amet elit. Anim consectetur qui amet aliqua qui dolore deserunt et veniam non mollit. Anim deserunt quis est nulla nostrud.",
    "createdAt": "Fri Jun 26 1992 06:06:37 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f0fc88e84105b05669",
    "title": "Title 3",
    "text": "Non exercitation veniam incididunt enim sit qui velit ad reprehenderit eiusmod enim. Aliqua ex exercitation aute ut exercitation aliquip sit incididunt ullamco mollit amet. Commodo elit non eu elit. Consequat nostrud id adipisicing elit laborum ea eiusmod tempor cillum dolore enim labore consequat duis. Eiusmod in reprehenderit sit cillum adipisicing irure incididunt officia pariatur.",
    "createdAt": "Wed Feb 28 1979 22:24:56 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f032267742b6070403",
    "title": "Title 4",
    "text": "Deserunt consectetur Lorem id ipsum adipisicing ex ad magna nisi qui et. Cillum aliquip sint duis ex aliquip officia officia. Qui proident consectetur non excepteur exercitation aliqua ad tempor ipsum. Sunt pariatur eiusmod pariatur proident. Nisi labore eiusmod esse ex sit fugiat irure nostrud ut voluptate excepteur sunt duis.",
    "createdAt": "Tue Nov 21 2017 04:28:19 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f054125ea3d29e3a18",
    "title": "Title 5",
    "text": "Elit enim ea cillum culpa laboris pariatur sunt adipisicing occaecat aute irure enim. Elit eiusmod incididunt irure incididunt consequat. Laborum velit do dolor nisi officia tempor veniam ipsum occaecat aliquip mollit excepteur est aliqua. Qui elit sunt ex aliqua excepteur quis consequat Lorem exercitation veniam sunt cupidatat culpa. Est minim labore nulla laborum cupidatat dolore labore eu amet magna.",
    "createdAt": "Thu Sep 11 1997 23:34:37 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f072f31b8552fc2ce3",
    "title": "Title 6",
    "text": "Labore laborum culpa do ex incididunt irure Lorem aliquip deserunt ullamco est in sit. Non adipisicing tempor cillum quis laboris amet proident consectetur cupidatat cillum. Laboris quis do esse labore dolore occaecat aliqua dolor. Culpa quis reprehenderit velit proident. Irure ipsum incididunt in dolor exercitation ullamco cillum incididunt consequat veniam tempor occaecat deserunt fugiat.",
    "createdAt": "Tue Sep 27 2005 15:20:33 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f0c2c99c7254a132a7",
    "title": "Title 7",
    "text": "Irure ut culpa enim ut est magna magna adipisicing esse commodo. Labore id nostrud aliquip tempor laboris aute anim eu aliquip. Fugiat eiusmod exercitation irure quis consequat ex ut enim non sunt cupidatat dolore. Enim exercitation labore labore enim adipisicing commodo minim in adipisicing ipsum fugiat duis dolore fugiat. Dolor deserunt adipisicing dolor ea amet ea Lorem proident adipisicing.",
    "createdAt": "Mon Nov 28 1994 23:43:43 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f0efb16d57d455fabc",
    "title": "Title 8",
    "text": "Consequat sint reprehenderit irure reprehenderit enim sit elit incididunt excepteur fugiat esse. Enim labore in elit sint do officia duis. Enim pariatur anim nostrud eiusmod esse in culpa elit labore est elit nulla Lorem deserunt. Fugiat non eu officia pariatur laborum reprehenderit ut mollit velit eu tempor. Qui tempor elit est duis cupidatat id sunt consequat aute duis voluptate fugiat.",
    "createdAt": "Sat Jun 18 2011 18:11:04 GMT+0000 (UTC)"
  },
  {
    "_id": "5c1d62f013b85e8cadd9c094",
    "title": "Title 9",
    "text": "Voluptate consequat et ullamco culpa culpa consectetur irure voluptate sint tempor aute in irure mollit. Lorem ad consequat adipisicing ex duis commodo. Eiusmod incididunt velit quis reprehenderit ipsum in consectetur anim. Ipsum ut ipsum consequat esse veniam esse deserunt exercitation. Laboris ipsum incididunt et veniam ex sunt irure exercitation aliquip.",
    "createdAt": "Wed Apr 19 2006 17:12:18 GMT+0000 (UTC)"
  }
]

class PostsList extends PureComponent {
  render() {

    const {
      items,
      onRemove,
    } = this.props;

    return (
      <div className="post-items">
        {
          items ? items.map(post => 
            <PostItem 
              key={post._id} 
              {...post} 
              onRemove={onRemove} 
            />
            ) 
            : 
            'Loading...'
        }
      </div>
    );
  };
};

PostsList.defaultProps = {
  items: items,
  onRemove: null
}

export default PostsList;