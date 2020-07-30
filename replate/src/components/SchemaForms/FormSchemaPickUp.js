import * as yup from "yup";

const FormSchema = yup.object().shape({
  type: yup
    .string()
    .oneOf(
      ["drinks", "appetizers", "saladSoup", "mainDishes", "desserts"],
      "Role is required"
    )
    .required("Required"),
  amount: yup.number().required("Amount is Required"),
  preferredPickupTime: yup.date().required("date is Required"),
});

export default FormSchema;
