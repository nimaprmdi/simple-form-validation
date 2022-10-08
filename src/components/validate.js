export const validate = (data, type) => {
    const errors = {};

    /** Email */
    if (!data.email) {
        errors.email = "Email Is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email Is Not Valid";
    } else if (!data.email.trim()) {
        errors.email = "Email Is Empty";
    } else {
        delete errors.email;
    }

    /** Password */
    if (!data.password) {
        errors.password = "Password Is Required";
    } else if (data.password.length < 6) {
        errors.password = "Password Should Bigger than 6";
    } else {
        delete errors.password;
    }

    if (type === "signup") {
        /** Name */
        if (!data.name.trim()) {
            errors.name = "Name is Required";
        } else {
            delete errors.name;
        }

        /** Password Confirm */
        if (!data.confirmPassword) {
            errors.confirmPassword = "Confirm Password is Empty";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Confrim Password Is not match with Password";
        } else {
            delete errors.confirmPassword;
        }

        /** isAccept */
        if (data.isAccepted) {
            console.log(data.isAccepted);
            delete errors.isAccepted;
        } else {
            console.log(data.isAccepted);
            errors.isAccepted = "Should Accept The Policy";
        }
    }

    return errors;
};
