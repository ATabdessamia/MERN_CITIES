/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import { fetchTours } from "../actions/index";

const Cards = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  if (!tours) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="card-columns">
      {tours.map((tour) => {
        return <Card tour={tour} key={Math.random()} />;
      })}
    </div>
  );
};

export default Cards;
