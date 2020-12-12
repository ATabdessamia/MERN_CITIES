import React from "react";
import { useDispatch } from "react-redux";

import { fetchToursBy } from "../actions/index";

const Select = () => {
  const dispatch = useDispatch();

  return (
    <div className="form-group w-50">
      <label htmlFor="gender">Continent</label>
      <select
        className="form-control"
        id="continent"
        onChange={(e) => dispatch(fetchToursBy(e.target.value))}
        defaultValue="default"
      >
        <option disabled value="default">
          Select Continent
        </option>
        <option>Asia</option>
        <option>Africa</option>
        <option>North America</option>
        <option>South America</option>
        <option>Australia</option>
      </select>
    </div>
  );
};

export default Select;
