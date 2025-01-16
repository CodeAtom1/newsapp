import React, { useEffect, useReducer, useRef } from "react";

const Counter = () => {
    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count - 1};
            default:
                return new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    useEffect(() =>{
        console.log('test');
    },);
    const inputRef = useRef(null);
    const focusInput = () =>{
        inputRef.current.focus();
    }

    return (<div style={styles.widget}>
        <input type="text" ref={inputRef} ></input>
        <button onClick={focusInput}>Focus</button>
        <h4> Count: { state.count }</h4>
        <button onClick={() => dispatch({ type: 'increment'})}> Increment </button>
        <button onClick={() => dispatch({ type: 'decrement'})}> Decrement </button>
    </div>)
}

export default Counter;

const styles = {
    widget: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '200px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      margin: '50px'
    }
}