import React, { useState } from "react";
import './LoginForm.css'

const initialEntryState = {
    userName: "",
    password: "",
    rememberMe: "",
};

const LoginForm = ({ onSubmit }) => {
    const [entry, setEntry] = useState(initialEntryState);
  



    const onChangeHandler = (e) => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setEntry({
          ...entry,
          [e.target.name]: value,
        });
      };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("onSubmitHandler");
        console.log(entry);

        if (!entry.userName || !entry.password) {
            return;
        }

        onSubmit({ ...entry });
        setEntry(initialEntryState);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group form-inline">

                <label htmlFor="userName" style={{marginRight: '10px'}}>User Name</label>
                <input
                    id="userName"
                    type="text"
                    name="userName"
                    value={entry.userName}
                    onChange={onChangeHandler}

                />
            </div>
            <div className="form-group form-inline">
            <label htmlFor="password" style={{marginRight: '20px'}}>Password</label>
            <input
                id="password"
                name="password"
                type="password"
                value={entry.password}
                onChange={onChangeHandler}

            />
            </div>
            <div className="form-group form-inline">
            <label htmlFor="rememberMe" style={{marginRight: '10px'}}>Remember Me</label>
            <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={entry.rememberMe}
                onChange={onChangeHandler}

            />
            </div>
            <button className="btn btn-primary btn-sm"  type="submit">Submit</button>

        </form>
    );
};

export default LoginForm;
