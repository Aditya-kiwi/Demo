import React from "react";
import {useNavigate} from 'react-router-dom';
/* This component is displayin user data in a list format. */
const ListView = ({ user }) => {
  const navigate = useNavigate();

/*This function is to navigate user to the user profile page on click.*/
  const viewProfile = (user) => {
  /* Navigating user on profile page with their id */
    navigate(`/user/${user.id}/profile`)
  };


  return (
    <div className="user-item" key={user.id} onClick={() => viewProfile(user)}>
    <div className="user-avatar">
      <img src={user.profilepicture} alt={`${user.name}'s avatar`} />
    </div>
    <div className="user-details" >
      <h2>{user.name}</h2>
    </div>
  </div>
  );
};

export default ListView;
