import { ADD, GET } from "./actionTypes";
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
} 