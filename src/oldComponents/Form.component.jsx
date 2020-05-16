import React, {useState} from "react";



const Form = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState({password: '1234aSAsas'});
    console.log(user);

    function handleChange(perro){
        // console.log(perro.target.value);
        const user = perro.target.value;
        setUser(user);
        console.log(user);
    }
  return (
    <form>
      <div className="form-group">
        <label>Usuario</label>
        <div className="field">
          <input
            type="text"
            label="title"
            name="name"
            className="form-control"
            value={user}
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label>Password</label>
        <div className="field">
          <input
            type="password"
            label="password"
            name="password"
            className="form-control"
            value={password}
            required
          ></input>
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary"  />
    </form>
  );
};

export default Form;
