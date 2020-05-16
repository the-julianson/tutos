import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState("julian");
  const [password, setPassword] = useState("jsajdasda");

  const [myfield, setMyfield] = useState([
    { username: "" },
    { password: "" }
  ]);

  function handleChange2(event){
    setMyfield()
  }


  function handleChange(event) {
    if (event.target.type === "password") {
      const _password = event.target.value;
      setPassword(_password);
    } else {
      const _user = event.target.value;
      setUser(_user);
    }
  }

  return (
    <form>
      <div className="form-group">
        <label>Usuario</label>
        <div className="field">
          <input
            type="text"
            required
            name="usuario"
            value={user}
            className="form-control"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label>Password</label>
        <div className="field">
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}
export default Form;

//JSX
