import React from "react";
import { useState } from "react";

const ShortForm = () => {
  const [firstName, setFirstName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };
  return (
    <div className="short_form">
      <form onSubmit={onSubmit}>
        <div className="input_group">
          <div className="input-item">
            <label className="label" htmlFor="">
              First Name :
            </label>
            <input
              onBlur={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              id=""
            />
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Last Name :
            </label>
            <input
              onBlur={(e) => setFirstName(e.target.value)}
              type="text"
              name="firstName"
              id=""
            />
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Email :
            </label>
            <input
              onBlur={(e) => setFirstName(e.target.value)}
              type="email"
              name="firstName"
              id=""
            />
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Gender :
            </label>
            <div className="radio_group">
              <div className="input_radio">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="input_radio">
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="input_radio">
                <input type="radio" name="gender" id="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Education :
            </label>
            <select>
              <option value="1">SSC</option>
              <option value="2">HSC</option>
              <option value="3">Degree</option>
            </select>
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Number of PC :
            </label>
            <div className="pc-count">
              <button className="count-btn">-</button>
              <input type="number" name="" id="" />
              <button className="count-btn">+</button>
            </div>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ShortForm;
