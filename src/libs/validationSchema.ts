import {
    email,
    object,
    type Output,
    string,
    regex,
    minLength,
    maxLength,
    forward,
    custom,
} from "valibot";

// type SignInSchemaOutput = Output<typeof SignInSchema>;
// type SignUpSchemaOutput = Output<typeof SignUpSchema>;

const isValidEmailDomainProvider = (email: string) => {
    const emailDomain = email.substring(email.lastIndexOf("@") + 1);
    return emailDomain === "gmail.com" || emailDomain === "outlook.com" || emailDomain === "frenzz.in" || emailDomain === "frenzz.com";
}
const isValidUsernameStartWithAlphabet = (username: string) => {
    if (username.charAt(0).match(/[a-zA-Z]/)) {
        return true
    } else {
        return false
    }
}

const isValidUsernameNoSpecialchar = (username: string) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return !specialChars.test(username);


}

const EmailSchema = string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
    custom(isValidEmailDomainProvider, "Use Gmail, Outlook, Provider"),
])

const PasswordSchema = string("Your password must be a string.", [
    minLength(1, "Please enter your password."),
    maxLength(30, "Your password is too long."),
    minLength(8, "Your password must have 8 characters or more."),
    regex(/[a-z]/, "Your password must contain a lowercase letter."),
    regex(/[A-Z]/, "Your password must contain a uppercase letter."),
    regex(/[0-9]/, "Your password must contain a number."),
])

const UsernameSchema = string("username must be a string.", [
    minLength(1, "Please enter your email."),
    minLength(6, "username must have 6 characters or more."),
    maxLength(12, "Your username is too long."),
    custom(isValidUsernameStartWithAlphabet, "username must start with alphabet"),
    custom(isValidUsernameNoSpecialchar, "username must not contain special characters"),

]);

const nameSchema = string("fullname must be a string.", [
    minLength(1, "Please enter your email."),
    minLength(3, "Name must have 3 characters or more."),
    maxLength(20, "Your name is too long."),
]);

const searchSchema = string("search must be a string.", [
    minLength(1, "Please enter your email."),
]);

export const SignInSchema = object({
    email: EmailSchema,
    password: PasswordSchema,
});

export const SignUpSchema = object({
    fullname: nameSchema,
    username: UsernameSchema,
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: PasswordSchema,
},
    [
        forward(
            custom(
                (input) => input.password === input.confirmPassword,
                'passwords do not match',
            ),
            ['confirmPassword']
        ),
    ]
)

export const subscribeNowSchema = object({
    email: EmailSchema
});
