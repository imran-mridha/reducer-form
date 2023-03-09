import React, { useReducer } from "react";
import { initialState, reducer } from "../state/formReducer";

const FormReduce = () => {
  

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="reduce_form">
      <form onSubmit={onSubmit}>
        <div className="input_group">
          <div className="input-item">
            <label className="label" htmlFor="">
              First Name :
            </label>
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
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
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="text"
              name="lastName"
              id=""
            />
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Email :
            </label>
            <input
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              type="email"
              name="emial"
              id=""
            />
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Gender :
            </label>
            <div className="radio_group">
              <div className="input_radio">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="input_radio">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="input_radio">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  onClick={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Education :
            </label>
            <select
              name="education"
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Degree">Degree</option>
            </select>
          </div>
          <div className="input-item">
            <label className="label" htmlFor="">
              Number of PC :
            </label>
            <div className="pc-count">
              <button
                className="count-btn"
                onClick={() =>
                  dispatch({
                    type: "DECREMENT",
                    payload: { count: 1 },
                  })
                }
              >
                -
              </button>
              <input type="number" name="quantity" id="" value={state?.quantity}   />
              {/* <span>{state.quantity}</span> */}

              <button
                className="count-btn"
                onClick={() =>
                  dispatch({
                    type: "INCREMENT",
                    payload: { count: 1 },
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="input-item">
          <label className="label" htmlFor="">
            Feadback :
          </label>
          <div className="">
            <textarea
              onBlur={(e) =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              className="input_feadback"
              name="feedback"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="input-item input_checkbox">
          <input
            className="box_check"
            type="checkbox"
            id="check"
            name="term"
            onClick={(e) =>
              dispatch({
                type: "TOGGLE",
              })
            }
          />
          <label htmlFor="check"> I Agree to term & conditions</label>
        </div>
        <input disabled={!state.term} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormReduce;
