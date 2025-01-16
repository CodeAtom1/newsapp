import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthState = (props)=>{

    const [state, setState] = useState({
        "name": "Gourav",
        "subscribed": true
    });

    const updateAuth = ()=>{
            setState((prevState) => ({...prevState, "subscribed": !state.subscribed}));
    }
    
    return (
        <AuthContext.Provider value={{state,updateAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;