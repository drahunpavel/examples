import React from 'react';

import './HeaderBlock.scss';

class HeaderBlock extends React.Component{
    render(){

        const {title, description, imageUrl} = this.props;

        return(
            <div className="header-block" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="container">
              <div className="header-block__overlay" />
              <div className="header-block__center">
                <h1>{title}</h1>
                <h3>{description}</h3>
              </div>
            </div>
          </div>
        );
    };
};

HeaderBlock.defaultProps = {
    title: 'default title',
    description: 'defaut description',
    imageUrl: 'https://www.kv.by/sites/default/files/pictures/mainimage/2018/04/besplatnye-onlai-n-kursy-kotorye-vy-mozhete-proi-ti-v-yanvare-.jpg'
};

export default HeaderBlock;