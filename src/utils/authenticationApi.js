import axios from "axios";
import { loginFail, loginStart } from '../Context/authContext/AuthActions'

const url = 'http://localhost:8800';

export async function facLoginAPI(dispatch) {
    const session_url = `${url}/faculty/login`;

    const details = {
        id: "ECE929",
        user_password: "hellothere"
    }
    dispatch(loginStart());
    try {
        const { data } = await axios.post(session_url, details, {
            headers: {
                "content-type": "application/json",
            }
        });
        return data;
    }
    catch (error) {
        dispatch(loginFail());
        if (error.response.status !== 200) {
            return 'ERROR';
        }
        return error;
    }
}


export async function adminLoginApi(dispatch) {
    const session_url = `${url}/librarian/login`;

    const details = {
        id: "LIB123",
        user_password: "hellothere"
    }
    dispatch(loginStart());
    try {
        const { data } = await axios.post(session_url, details, {
            headers: {
                "content-type": "application/json",
            }
        });
        return data;
    }
    catch (error) {
        dispatch(loginFail());
        if (error.response.status !== 200) {
            return 'ERROR';
        }
        return error;
    }
}
