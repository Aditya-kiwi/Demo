import React from "react";
import mapImage from '../Assets/images/Mapimage.png';

/** This component renders a body content of user profile information. */
const ProfilePageBody = ({user}) => {

    return (
      <div className="profile-body-container">
        <div className="profile-row">
          <div className="profile-row-left">
            <div className="profile-body-avatar">
              <img src={user?.profilepicture} alt={`avatar`} />
            </div>
            <div className="profile-user-details">
              <h4>{user?.name}</h4>
            </div>
            <div className="user-information">
              <h5>
                <span>Username:</span> {user?.username}
              </h5>
              <h5>
                <span>E-mail:</span> {user?.email}
              </h5>
              <h5>
                <span>Phone:</span> {user?.phone}
              </h5>
              <h5>
                <span>Website:</span> {user?.website}
              </h5>
            </div>
            <div className="user-information">
              <h5 className="user-information-label">
                <span>Comapny:</span>
              </h5>
              <h5>
                <span>Name:</span> {user?.company?.name}
              </h5>
              <h5>
                <span>CatchPlease:</span> {user?.company?.catchPhrase}
              </h5>
              <h5>
                <span>Username:</span> {user?.company?.bs}
              </h5>
            </div>
          </div>
  
          <div className="profile-row-right">
            <div className="user-information">
              <h5 className="user-information-label">
                <span>Address:</span>
              </h5>
              <h5>
                <span>street:</span> {user?.address?.street}
              </h5>
              <h5>
                <span>suite:</span> {user?.address?.suite}
              </h5>
              <h5>
                <span>city:</span> {user?.address?.city}
              </h5>
              <h5>
                <span>Zipcode:</span> {user?.address?.zipcode}
              </h5>
              <div className="map-class">
              <img src={mapImage} alt={`avatar`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ProfilePageBody;  