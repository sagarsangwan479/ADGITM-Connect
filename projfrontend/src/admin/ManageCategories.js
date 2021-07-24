import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getCategories, deleteCategory } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCateogry  = (categoryId) => {
    deleteCategory(categoryId,user._id,token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  }

  return (
    <Base title="Welcome admin" description="Manage categories here">
      
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h2 className="mb-4 mt-4">All Categories:</h2>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3"></h2>
          {categories.map((category, index) => {
            return (
              <div>
                
              <h3 className="text-dark size" key={index}>
                {category.name}
              </h3>

             <div className="row text-center mb-2 ">
              <div className="col-4">
  
                </div>
            <div className="col-4">
           <Link
                   className="btn btn-success"
                   to={`/admin/category/update/${category._id}`}
                    >
           <span className="">Update</span>
           </Link>
        </div>
        <div className="col-4">
         <button onClick={() => {
           deleteThisCateogry(category._id);
         }} className="btn btn-danger">
          Delete
   </button>
</div>
</div> 
</div>
        
            );
          })}
          
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
