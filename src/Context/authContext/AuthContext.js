import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";
import Cookies from 'js-cookie'


const initalState = {
    user: Cookies.get('user') ? JSON.parse(decodeURI(Cookies.get('user'))) : null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(initalState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initalState);

    useEffect(() => {

        if (state.user) {
            Cookies.set('user', JSON.stringify(state.user));
        }
        else {
            Cookies.set('user', JSON.stringify(null));
        }
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};