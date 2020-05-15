import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label>Label</label>
        <div className="field">
          <input
            type="text"
            label="title"
            name="name"
            className="form-control"
            value={null}
            required
          ></input>
        </div>
      </div>
      <div className="form-group">
        <label>Label</label>
        <div className="field">
          <input
            type="password"
            label="password"
            name="password"
            className="form-control"
            value={null}
            required
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
