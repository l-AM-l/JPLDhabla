import React, { createContext, useContext, useReducer } from 'react';
import DirectoryReducer from './DirectoryReducer';
import { exampleAction } from './actions';
import api from '../api/api';

const DirectoryContext = createContext();

function DirectoryProvider({ children }) {
    
    const initialState = {
        exampleValue : 'exampleValue',

    };
    
    const [state, dispatch] = useReducer(DirectoryReducer, initialState);

    

    return (
        <DirectoryContext.Provider value={{ state, dispatch }}>
            {children}
        </DirectoryContext.Provider>
    );
}

async function exampleFunction(dispatch) {
    /*
    try {
        const res = await api.post('/example', { exampleValue });
        if (res.data.success) {
            dispatch({ type: exampleAction, payload: res.data.exampleValue });
        }

        return res.data.success;
    } catch (error) {
        console.error("Error logging in:", error);
    }
        */
}

async function logIn(){
    try{
        await api.post('/logIn');

    }catch(error){
        console.error("Error Login In" , error );
    }
}
export default DirectoryProvider;
export { logIn };