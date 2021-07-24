import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { updateUser } from "./helper/userapicalls";
import { isAutheticated } from "../auth/helper";

const ManageProfile = () => {

    const { user, token } = isAutheticated();
    const userId = user._id;
    
  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    error: "",
    success: false,
  });

  const { name, email, phone, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    updateUser({ name, email, phone, userId,token })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            phone:"",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in updation"));
  };

  const updateForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-light">Phone</label>
              <input
                className="form-control"
                onChange={handleChange("phone")}
                type="text"
                value={phone}
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            User account was updated successfully.
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="User updation" description="update your accoount">
      {successMessage()}
      {errorMessage()}
      {updateForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default ManageProfile;
