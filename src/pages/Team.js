import React from 'react';
import {TeamList} from "../helpers/TeamList";
import TeamMembers from "../components/TeamMembers";
import "../styles/Team.css";

function Team() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Team Members</h1>
        <div className="menuList">
        {TeamList.map((teamMembers, key) => {
          return (
            <TeamMembers
              key={key}
              image={teamMembers.image}
              name={teamMembers.name}
              price={teamMembers.position}
            />
          );
        })}
        </div>
    </div>
  );
}

export default Team;