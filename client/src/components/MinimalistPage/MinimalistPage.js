import React from "react";
import "./MinimalistPage.css";
import { StylizedPinnedCard } from '../../components/StylizedPinnedCard/StylizedPinnedCard';
import { DashboardUserInfo } from '../../components/DashboardUserInfo/DashboardUserInfo';



export const MinimalistPage = props => {
  const {userInfo, pinnedRepos} = props;
  return(
    <div>
       <a href='/dashboard/templates'><button>GO BACK</button></a>
       <a href='/dashboard/templates'><button>USE THIS TEMPLATE</button></a>
      <DashboardUserInfo userInfo={userInfo} />           
      <StylizedPinnedCard pinnedRepos={pinnedRepos} />
    </div>
  )
}