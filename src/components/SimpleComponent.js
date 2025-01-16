import React, {Component} from "react";
class SimpleComponent extends Component {
    render() {
      return (<h2 style={styles.h2}>Hi, I am a Car!</h2>
      );
    }
  }

  const styles = {
    h2:{
        marginLeft: '200px',
        marginTop: '200px'
    }
  };
  export default SimpleComponent;