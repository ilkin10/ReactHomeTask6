import React, { useState } from "react";
import "./App.css";
export default function AllCars({ cs, onClickForUpdateEvent, SetCars }) {
  const [sortOrder, setSortOrder] = useState("lowerToHigher");
  const [sortByLetter, setSortByLetter] = useState("AToZ");

  function LowerToHigherFunc() {
    const sortedCars = cs.slice().sort((a, b) => {
      if (sortOrder === "lowerToHigher") {
        return a.carPrice - b.carPrice;
      } else {
        return b.carPrice - a.carPrice;
      }
    });
    SetCars(sortedCars);
    setSortOrder(
      sortOrder === "lowerToHigher" ? "higherToLower" : "lowerToHigher"
    );
  }

  function AToZFunc() {
    const sortedCars = cs.slice().sort((a, b) => {
      const nameA = a.carVendor.toUpperCase();
      const nameB = b.carVendor.toUpperCase();
      if (sortByLetter === "AToZ") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    SetCars(sortedCars);
    setSortByLetter(sortByLetter === "AToZ" ? "ZToA" : "AToZ");
  }

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>All Car List</h1>
      <br></br>
      <button
        onClick={LowerToHigherFunc}
        style={{ marginRight: "20px", width: "20%" }}
      >
        <b>
          {sortOrder === "lowerToHigher"
            ? "Lower To Higher"
            : "Higher To Lower"}
        </b>
      </button>
      <button
        onClick={AToZFunc}
        style={{ background: "#007fcc", width: "20%" }}
      >
        <b>{sortByLetter === "AToZ" ? "A To Z" : "Z To A"}</b>
      </button>
      <div></div>
      {cs.map((c) => (
        <div style={{ display: "inline-block", margin: "50px" }}>
          <div id="maincard" className="card">
            <img src={c.carImage} alt="Car" className="sneaaker-img" />
            <h1 className="title sizes-box">
              <section
                style={{
                  margin: "15px",
                  marginTop: "-5px",
                  display: "inline-block",
                }}
              >
                <b style={{ fontSize: "33px" }}>
                  {c.carVendor} {c.carModel}
                </b>
                <br></br>
              </section>
            </h1>
            <div className="button-box">
              <button
                style={{ marginBottom: "10px", background: "orangered" }}
                className="purchase"
              >
                Buy For {c.carPrice}$ Now
              </button>
              <br></br>
              <button
                style={{ marginBottom: "-10px", background: "#007fcc" }}
                className="purchase"
                onClick={() => onClickForUpdateEvent(c)}
              >
                Click For Update
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
