import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signinUser, signoutUser, signupUser } from "../services/apiuser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: () => {},
    onError: () => {
      toast.error("Error occured while login into your account.");
    },
  });
  return { signin, isPending };
}

export function useSignout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signout } = useMutation({
    mutationFn: signoutUser,
    onSuccess: () => {
      // Clear any cached user data
      localStorage.clear();
      queryClient.clear();
      queryClient.invalidateQueries({ queryKey: ["signin"] });
      toast.success("Logout successfully...");
      // Redirect to login page or any other page
      navigate("/login");
    },
    onError: () => {
      toast.error("Error occured while logging out.");
    },
  });
  return { signout };
}
