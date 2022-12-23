import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";




const formValidation=() =>{
    
     const emailSubcriptionSchema = yup.object().shape({
        user_name: yup.string().required("Name cannot be empty"),
        user_email: yup.string().email().required("email field cannot be empty"),
        contact: yup.string().required("please add you contact number"),
        message: yup.string(),
      });
      // export default emailSubcriptionSchema;
      
       const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        mode: "onSubmit",
        criteriaMode: "all",
        reValidateMode: "onChange",
        defaultValues: {
          user_name: "",
          user_email: "",
          contact: "",
          message: "",
        },
        resolver: yupResolver(emailSubcriptionSchema),
      });
      
}
// export const { register,formState: { errors },handleSubmit,}=useForm()
export default formValidation

