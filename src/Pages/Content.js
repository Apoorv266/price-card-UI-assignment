import React from "react";
import "../Styles/Body.css";
import ActiveCard from "./ActiveCard";
import MinorCard from "./MinorCard";
const Content = () => {
  const minor1 = 15
  return (
    <div className="main-body">
      <section className="body-head">
        <h1>Plan Summary</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </section>

      <div className="cards">
        <p className="slide-btn">{"<"}</p>
        <MinorCard data={{plan: 150, price : 35, actualPrice: 30}}/>
        <ActiveCard data={{plan: 400, price : 45,actualPrice: 45 }}/>
        <MinorCard data={{plan: 900, price : 75,actualPrice: 75 }}/>
        <p className="slide-btn">{">"}</p>
      </div>
    </div>
  );
};

export default Content;
