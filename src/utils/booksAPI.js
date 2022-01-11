import axios from "axios";

const url = 'http://localhost:8800';

export async function getAllBooks() {
    const session_url = `${url}/books`;

    try {
        const { data } = await axios.get(session_url);
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function addBook(token, newBook) {

    const bearerToken = 'Bearer ' + token;

    const session_url = `${url}/books`;

    console.log(newBook)

    try {
        const { data } = await axios.post(session_url, newBook, {
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

        if (error.response.status === 409) {
            return { status: 409, msg: error.response.data.msg };
        }

        if (error.response.status === 500) {
            return { status: 500, msg: 'Check date format yyyy-dd-mm or server status' };
        }
    }
}



export async function deleteBookApi(bookid) {
    const session_url = `${url}/books`;

    try {
        const { data } = await axios.delete(session_url, {
            params: {
                id: bookid,
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function searchBookApi(title) {
    const session_url = `${url}/books/search`;
    try {
        const { data } = await axios.get(session_url, {
            params: {
                title: title,
            }
        });
        return data;
    }
    catch (error) {
    }

}