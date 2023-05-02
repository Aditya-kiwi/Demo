import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {NUMBER} from './Constants'

/** This component renders a header for the application which contains user's profile details and a logout button. */

const Header = ({users,user, id}) => {
    const navigate = useNavigate();
    const otherUser = users?.filter((item) => item.id !== Number(id)).slice(NUMBER.ZERO, NUMBER.TWO);
    return (
      <div className="header-row">
        <h2>Profile</h2>
        <div className="header-profile">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="header-avatar">
                <img src={user?.profilepicture} alt={`avatar`} />
              </div>
              <div className="header-user-details">
                <h4>{user?.name}</h4>
              </div>
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
            <div className="header-dropdown-avatar">
                <img src={user?.profilepicture} alt={`avatar`} />
              </div>
              <div className="header-dropdown-user-details">
                <h4>{user?.name}</h4>
                <p>{user?.email}</p>
              </div>
              <ul className="user-item">
              {otherUser && otherUser.map((userDetails)=>{
                return(<li key={userDetails?.id}>
              <div className="user-item-avatar">
                <img src={userDetails?.profilepicture} alt={`${userDetails?.name}'s avatar`} />
              </div>
              <div className="user-item-details" >
                <h5>{userDetails?.name}</h5>
              </div>
              </li>
                )
              })
              }
              </ul>
              <Dropdown.Item className='logout-button' href="#/action-1" onClick={() => navigate('/')}>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  };
  export default Header;
