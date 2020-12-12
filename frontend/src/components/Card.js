import React, { useState } from "react";

const Card = ({ tour }) => {
  const [read, setRead] = useState(false);
  const [icon, setIcon] = useState(false);
  return (
    <div className="card shadow rounded">
      <img className="card-img-top img-fluid" src={tour.image} alt="" />
      <div className="card-body">
        <h4 className="card-title megrim">{tour.name}</h4>
        <button
          className="btn btn-outline-info btn-sm"
          onClick={() => {
            setRead(!read);
            setIcon(!icon);
          }}
        >
          {icon ? (
            <i className={`far fa-arrow-alt-circle-up`}></i>
          ) : (
            <i className={`far fa-arrow-alt-circle-down`}></i>
          )}
        </button>
        {read ? <p className="card-text">{tour.info}</p> : null}
      </div>
    </div>
  );
};

export default Card;
