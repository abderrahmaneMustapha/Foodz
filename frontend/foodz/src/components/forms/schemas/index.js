import * as Yup from "yup";

export const SingupValidationSchema =Yup.object({
    first_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    last_name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "password must be at least 8 charcters long")
        .required("Required"),
    wilayas: Yup.string().required("Required"),
    adress: Yup.string().min(5, "adress too short").required("Required"),
    date_birth: Yup.date(),
});

export const SinginValidationSchema =Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "password must be at least 8 charcters long")
        .required("Required"),
});
