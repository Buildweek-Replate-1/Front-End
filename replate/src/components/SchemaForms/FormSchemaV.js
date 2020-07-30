import * as yup from "yup";

const FormSchemaV = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("UserName is Required"),
  volunteerName: yup
    .string()
    .min(3, "Business Name must be at least 3 characters")
    .required("Business Name is Required"),
  phoneNumber: yup.number().required("Phone Number is Required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

export default FormSchemaV;
