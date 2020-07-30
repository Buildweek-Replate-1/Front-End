import * as yup from "yup";

const FormSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("UserName is Required"),
  businessName: yup
    .string()
    .min(3, "Business Name must be at least 3 characters")
    .required("Business Name is Required"),
  businessAddress: yup.string(),
  phoneNumber: yup.number().required("Phone Number is Required"),
  password: yup.string().min(6, "Password must be at least 6 characters"),
});

export default FormSchema;
