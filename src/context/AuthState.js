import AuthContext from "./AuthContext";
import { useState } from "react";


const AuthState = (props)=>{
    const s1 = {
        "name": "Gourav",
        "subscribed": true
    }
    const [state, setState] = useState(s1);
    const updateAuth = ()=>{
        setTimeout(()=>{
            setState({
                    "name": "Larry",
                    "subscribed": false
                });
        },1000);
    }
    return (
        <AuthContext.Provider value={{state,updateAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;