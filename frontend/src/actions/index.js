import axios from "axios";

export const fetchTours = () => async (dispatch) => {
  const { data } = await axios.get("/api/tours");
  dispatch({ type: "FETCH_TOURS", payload: data.data.tours });
};

export const fetchToursBy = (continent) => async (dispatch) => {
  const { data } = await axios.get(`/api/tours/${continent}`);
  dispatch({ type: "FETCH_TOURS_BY", payload: data.data.tours });
};
