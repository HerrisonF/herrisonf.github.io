import React from 'react';
import HeaderAboutMeTitleComponent from '../../components/headerAboutMeTitleComponent';
import HeaderUserInformationAndImageComponent from '../../components/headerUserInformationAndImageComponent';

import './style.scss';

const HeaderAboutMeContainer = () => {
    return (
        <div>
            <HeaderUserInformationAndImageComponent />
            <HeaderAboutMeTitleComponent />
        </div>
    );
};

export default HeaderAboutMeContainer;