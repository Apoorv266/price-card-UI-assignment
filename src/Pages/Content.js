import React from "react";
import "../Styles/Body.css";
import ActiveCard from "./ActiveCard";
import MinorCard from "./MinorCard";
const Content = () => {
  
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
        <MinorCard />
        <ActiveCard />
        <MinorCard />
        <p className="slide-btn">{">"}</p>
      </div>
    </div>
  );
};

export default Content;
