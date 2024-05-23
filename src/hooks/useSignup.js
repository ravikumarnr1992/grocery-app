import { useMutation } from "@tanstack/react-query";

import { signupUser } from "../services/apiuser";
import toast from "react-hot-toast";

 export function useSignup(){
  const {mutate: signup, isPending } = useMutation({
   mutationFn: signupUser,
   onSuccess: () => {
    toast.success("User successfully registered!.")
   },
   onError: () => {
    toast.error("Error occured while registering user..")
   }
  })
  return { signup, isPending };
}