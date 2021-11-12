import React from 'react';
import HeaderAboutMeContainer from '../../containers/header_about_me_container';
import ResumePage from '../../pages/ResumePage';
import DashBoardPortfolioComponent from '../../components/dashBoardPortfolioComponent';

import './style.scss';

const MasterPage = () => {
    return (
        <div className="master_content">
            <HeaderAboutMeContainer />
            <DashBoardPortfolioComponent />
            <ResumePage/>
        </div>
    );
};

export default MasterPage;