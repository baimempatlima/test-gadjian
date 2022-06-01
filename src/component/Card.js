import React from "react";

export default function Card({ users }) {
  return (
    <div className="card text-dark bg-white mb-3" style={{ maxWidth: "14rem", height: "450px" }}>
      <div className="card-header">{users.login.username}</div>
      <div className="justify-content mt-4 mb-3">
        <img src={users.picture.medium} className="card-img-top border border-secondary rounded-circle" alt="..." style={{ width: "100px", height: "100px" }} />
      </div>
      {/* <div className="card-body">
        <h6 className="card-title">Light card title</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div> */}
      <div className="text-start">
        <ul class="list-group list-group-flush">
          <h6 className="card-title " style={{ marginLeft: "17px" }}>
            Name
          </h6>
          <li className="list-group-item">
            {users.name.title}.{users.name.first}.{users.name.last}
          </li>
          <h6 className="card-title mt-2" style={{ marginLeft: "17px" }}>
            Telephone
          </h6>
          <li className="list-group-item">{users.phone}</li>
          <h6 className="card-title mt-2" style={{ marginLeft: "17px" }}>
            Email
          </h6>
          <li className="list-group-item ">{users.email}</li>
        </ul>
      </div>
    </div>
  );
}
