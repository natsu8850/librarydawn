import axios from "axios";

const url = 'http://localhost:8800';

export async function getAllIssues() {
    const session_url = `${url}/issues`;

    try {
        const { data } = await axios.get(session_url);
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function addIssue(token, newIssue) {

    const bearerToken = 'Bearer ' + token;

    const session_url = `${url}/issues`;

    try {
        const { data } = await axios.post(session_url, newIssue, {
            headers: {
                token: bearerToken,
                "content-type": "application/json",
            }
        });
        return data;
    }
    catch (error) {
        if (error.response.status === 400
            // && error.response.data.msg === 'Some fields are missing'
        )
            return 'MISSING_FIELDS';

        if (error.response.status === 404) {
            return { status: 404, msg: error.response.data.msg };
        }

        if (error.response.status === 500) {
            return { status: 500, msg: 'Check date format yyyy-dd-mm or server status' };
        }
    }
}