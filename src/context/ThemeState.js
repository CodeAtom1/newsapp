import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;