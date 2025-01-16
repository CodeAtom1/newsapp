import React, { useEffect, useState } from "react";

const EditProfile = () =>{
    const [profile,setProfile] = useState({Name:'',Email:''});

    useEffect = async () =>{
        
    }

    const saveProfile = (event) => {
        event.preventDefault();
        alert(`Profile saved for User ${profile.Name}, Email ${profile.Email}`);
    }
    const onHandleChange = (event) => {
        const {name, value} = event.target;
        setProfile((prev) =>({
            ...prev,
            [name]:value
        }));
    }

    const {Name, Email} = profile;
    return (<form onSubmit={saveProfile}>
        <div style={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="Name"
              value={Name}
              onChange={onHandleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="Email"
              value={Email}
              onChange={onHandleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>)
}

const styles = {
    form:{
      marginTop: '100px'
    }
  };
export default EditProfile;