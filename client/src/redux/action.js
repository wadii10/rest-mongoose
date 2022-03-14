import { ADD, DELETE, GET, UPDATE } from "./actionTypes";
import axios from "axios";

export const getUsers = () => async(dispatch) => {
    try {
        const res = await axios.get("/get");
        dispatch(
            {
                type : GET,
                payload : res.data
            }
        );
    } catch (error) {
        alert("get all error");
    }
};

export const addUser = (newUser) => async(dipatch) => {
    try {
        const res = await axios.post("/post", newUser);
        dipatch(
            {
                type : ADD,
                payload : res.data
            }
        )
    } catch (error) {
        alert("add user problem");
    }
};

export const deleteUser = (_id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/delete/${_id}`);
        dispatch(
            {
                type : DELETE,
                payload : res.data
            }
        )
    } catch (error) {
        alert("delete user error")
    }
};

export const editeUser = (user) => async(dispatch) => {
    try {
        const res = await axios.put(`/update/${user._id}`, user);
        dispatch(
            {
                type : UPDATE,
                payload : res.data
            }
        )
    } catch (error) {
        alert("update user error");
    }
};