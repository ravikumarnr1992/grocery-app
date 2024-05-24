import { useMutation } from "@tanstack/react-query";

import { signinUser, signupUser } from "../services/apiuser";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {},
    onError: () => {},
  });
  return { signup, isPending };
}

export function useSignin() {
  const { mutate: signin, isPending } = useMutation({
    mutationFn: signinUser,
    onSuccess: () => {},
    onError: () => {
      toast.error("Error occured while login into your account.");
    },
  });
  return { signin, isPending };
}
