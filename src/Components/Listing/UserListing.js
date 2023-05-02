import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ListView from "./ListView";
import { fetchUsers } from "../Common/Api";
import { NUMBER } from "../Common/Constants";

/* This component is responsible for rendering the user list. here i am using InfiniteScroll component for infinite scrolling.
    in side this i have used listview component to render the individual user items. */
const UserListing = () => {
  const [users, setUsers] = useState([]);

  /* It fetches the initial set of user data when the component mounts using the `fetchUsersList` function. */
  useEffect(() => {
    fetchUsersList();
    /* add the class to the body element */
    document.body.classList.add("landing-page");
    return () => {
      /* remove the class from the body element when the component unmounts */
      document.body.classList.remove("landing-page");
    };
  }, []);

  const fetchUsersList = async () => {
    const userListResponse = await fetchUsers();
    setUsers(userListResponse.data.users);
  };

  /* this function is to fetch additional data when the user scrolls to the bottom of the list. */
  const fetchMoreUsersList = async () => {
    const userListResponse = await fetchUsers();
    setUsers((prevUsers) => [...prevUsers, ...userListResponse.data.users]);
  };

  /* I have set infinite scroll upto 100 record only. */
  return (
      <div className="user-list-container">
      <div className="user-list-wrapper">
        <h3 className="user-list-header">Select an account</h3>
        <div className="infinite-scroll-container" id="scrollableDiv">
          <InfiniteScroll
            dataLength={users.length}
            next={fetchMoreUsersList}
            hasMore={users.length < NUMBER.ONE_HUNDRED}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {users?.length ?
              users.map((user) => {
                return <ListView user={user} key={user.id} />;
              })
              : 'No Record Found'}
          </InfiniteScroll>
        </div>
      </div>
      </div>
  );
};
export default UserListing;
