//form layout created by vivekcse

export const signinFormLayout = {
    id: "signinForm",
    values: {
        email: "",
        password1: "",
    },

    button: {
        id: "signinForm_btn",
        text: "Sign In",
        variant: 1,
    },

    inputFields: [
        {
            id: "signinForm_inputFields_1",
            variant: 1,
            name: "email",
            type: "text",
            label: "Enter Username/Email :",
            placeholder: "Enter Your Email :",
            required: true,
        },
        {
            id: "signinForm_inputFields_2",
            variant: 1,
            name: "password",
            type: "password",
            label: "Enter your password :",
            placeholder: "Enter your Password :",
            required: true,
        },
    ],
};

export const signupFormLayout = {

    id: "signupForm",
    values: {
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    button: {
        id: "signupForm_btn",
        text: "Sign up",
        variant: 1,
    },

    inputFields: [
        {
            id: "signupForm_inputFields_1",
            variant: 1,
            name: "fullname",
            type: "text",
            label: "Enter Your Name :",
            placeholder: "Enter Your Name :",
            required: true,
        },
        {
            id: "signupForm_inputFields_2",
            variant: 1,
            name: "username",
            type: "text",
            label: "Enter Username :",
            placeholder: "Enter Username :",
            required: true,
        },
        {
            id: "signupForm_inputFields_3",
            variant: 1,
            name: "email",
            type: "text",
            label: "Enter email :",
            placeholder: "Enter email :",
            required: true,
        },
        {
            id: "signupForm_inputFields_4",
            variant: 1,
            name: "password",
            type: "password",
            label: "Enter your password :",
            placeholder: "Enter your Password :",
            required: true,
        },
        {
            id: "signupForm_inputFields_5",
            variant: 1,
            name: "confirmPassword",
            type: "password",
            label: "confirm password :",
            placeholder: "confirm password :",
            required: true,
        },
    ],
};

export const subscribeNowLayout = {
    id: "subscribeNowForm",
    values: {
        email: "",
    },
    button: {
        id: "subscribeNowForm_btn",
        text: "Subscribe Now",
        variant: 1,
    },
    inputFields: [
        {
            id: "subscribeNowForm_inputField_1",
            variant: 1,
            name: "email",
            type: "text",
            label: "Enter email Address :",
            placeholder: "Enter email Address :",
            required: true,
        },
    ],
};


// export const userFormInput = ({
//     id,
//     variant = 0,
//     name = "",
//     type = "text",
//     label,
//     placeholder,
//     required = false,
// }: inputField) => {
//     return {
//         id: id,
//         variant: variant,
//         name: name,
//         type: type,
//         label: label,
//         placeholder: placeholder,
//         required: required,
//     };
// };
