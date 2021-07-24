import React from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import Base from "../core/Base";
import { purchaseList } from "./helper/userapicalls";

const PurchaseList = () => {
  const { 
      user:{_id} } = isAutheticated();

const {token} = isAutheticated();

  const purchasedItems = purchaseList({_id,token});
  return (
    <Base
      title="User Purchase List"
      description="Here is the list of items purchased"
    >
        <div className="card">
        <ul className="list-group">
        
          <li className="list-group-item">
            
          </li>
          
        </ul>
      </div>
    </Base>
  );
};

export default PurchaseList;
