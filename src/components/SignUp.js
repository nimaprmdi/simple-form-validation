import React, { useState, useEffect } from "react";
import { notify } from "./toast";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUp.module.css";

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data));
    }, [data]);

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    };

    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.keys(errors).length) {
            console.log(data);
            notify("Signed In Successfully ", "success");
        } else {
            notify("Not Valid ", "error");
            setTouched({
                name: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            });
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>

                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={errors.name && touched.name ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onFocus={focusHandler}
                        onChange={changeHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={errors.email && touched.email ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onFocus={focusHandler}
                        onChange={changeHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onFocus={focusHandler}
                        onChange={changeHandler}
                        className={errors.password && touched.password ? styles.uncompleted : styles.formInput}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onFocus={focusHandler}
                        onChange={changeHandler}
                        className={
                            errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput
                        }
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I accet terms of privacy policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onFocus={focusHandler}
                            onChange={changeHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div className={styles.formButtons}>
                    <a href="#">Login</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)
