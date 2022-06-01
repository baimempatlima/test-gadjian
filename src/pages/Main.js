import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";

const url = `https://randomuser.me/api/?results=28`;

function Main() {
  const [users, setUsers] = useState([]);
  // const getUser= async () => {
  //   try {
  //     await axios.get(`https://randomuser.me/api/?results=28`).then((res) => setUsers(res.results));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const fetchData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="mt-5 pt-5 me-5" style={{ marginLeft: "290px" }}>
        <div className="row container-fluid ms-auto bg-white ">
          <div className=" col flex-container text-start p-2">
            <div className=" pt-2">
              <h5 className="text-uppercase fw-bold text-muted">Personnel List</h5>
            </div>
            <div className="col-md-12">
              <p className="text-muted">List of all personel</p>
            </div>
          </div>
          <div className="col flex-container me-2 " style={{ display: "flex" }}>
            <div className="mt-4 ms-auto">
              <div className=" input-group mb-3">
                <span className="input-group-text bg-white span2" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control spani" placeholder="Find personnels" aria-label="Username" aria-describedby="basic-addon1" style={{ width: "150px" }} />
                <button type="button" className="btn btn-secondary fw-bold small buttonadd ms-2" style={{ fontSize: "12px" }}>
                  ADD PERSONNEL
                  <span>
                    <i className="bi bi-plus-lg"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-2 pt-5 me-4" style={{ marginLeft: "300px" }}>
        <div className="row d-flex justify-content-between">
          {users.map((user, index) => (
            <div className="col-md-3">
              <div key={index}>
                <Card users={user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
