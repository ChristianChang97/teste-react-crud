import Axios from "axios";
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const register =
  (name, lastName, cpf, nationality, cep, state, city, street, email, tel) =>
  async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: {
        name,
        lastName,
        cpf,
        nationality,
        cep,
        state,
        city,
        street,
        email,
        tel,
      },
    });
    try {
      const { data } = await Axios.post("/api/users/register", {
        name,
        lastName,
        cpf,
        nationality,
        cep,
        state,
        city,
        street,
        email,
        tel,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/users");
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error.message });
  }
};

export const detailsUser = (id) => async (dispatch) => {
  dispatch({
    type: USER_DETAILS_REQUEST,
    payload: id,
  });
  try {
    const { data } = await Axios.get(`/api/users/${id}`);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: USER_DELETE_REQUEST,
    payload: id,
  });
  try {
    await Axios.delete(`/api/users/delete/${id}`);
    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
