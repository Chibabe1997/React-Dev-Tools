import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail tel={props.tel} email={props.email} />
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
