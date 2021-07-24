import React from "react";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";


const Profile = () => {

 const {
   user: {name,email,phone} 
 }  = isAutheticated();

  const userProfile = () => {

    return (
      <div className="card mb-4">
        <h4 className="card-header text-dark">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> <span className="text-dark">{name}</span>
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> <span className="text-dark">{email}</span>
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Phone:</span> <span className="text-dark">{phone}</span>
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger">User Area</span>
          </li>
        </ul>
      </div>
    );
  };


  return (
    <Base title="Profile" description="This is the user's profile"> 
      {userProfile()}
    </Base>
  );
};

export default Profile;
