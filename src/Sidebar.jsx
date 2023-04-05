import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {

    const recentItems = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://t4.ftcdn.net/jpg/03/08/29/25/360_F_308292542_efcaEAlCjoTVHCliJjBtvdRSURxikGYF.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Agustín Delfino</h2>
        <h4>agustin.delfino92@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">3.289</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
