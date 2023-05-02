import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import MenuBar from "../Common/Menubar";
import { fetchUsers } from "../Common/Api";
import { useParams } from "react-router-dom";
import { NUMBER } from "../Common/Constants";

/** This component renders a view for the deatils pages which contains header,menu and pagebody.
 *  Inside this I am fetching users information from the API using the fetchUsers function from the Common/Api module. */

export const ProfilePage = ({ContentComponent}) => {
    const [user, setUser] = useState([]);
    const {id}= useParams();
    /*Api call inside this funtion */
    const fetchUsersData = async () => {
      const userListResponse = await fetchUsers();
      setUser(userListResponse.data.users);
    };

    const userProfile = user?.length && user?.filter((item) => item.id === Number(id))[NUMBER.ZERO];

  /*making api call on mount only */
    useEffect(() => {
      fetchUsersData();
    }, []);

  return (
    <>
      <div className="main-container-profile">
        <MenuBar id={id} />
        <div className="body-container">
          <Header users={user} user={userProfile} id={id}/>
          <ContentComponent user={userProfile} />
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
