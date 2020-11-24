import React from "react";
import "bootstrap/dist/css/bootstrap.css"
const User=({data})=>{
const {name , email ,phone, address,company,website}=data;
const {street,suite,city,zipcode}=address;



    return(

<div className="card border-success mb-3 col-3" >
  <div className="card-header bg-transparent border-success">{name}</div>
 
  <div className="card-footer bg-transparent border-success"><strong>Email:</strong>{email} <br/>
  <strong>Company :</strong>{company.name} <br/>
  <strong>Adress :</strong>{street}-{suite}-{city} {zipcode}<br/>
  <strong>Phone :</strong>{phone}<br/>
  <strong>Website :</strong>{website}


   
  </div>
  

</div>



    );
}
export default User;