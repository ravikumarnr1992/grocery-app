import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignin } from "../../hooks/useUser";
import toast from "react-hot-toast";

const Login = () => {
  const { signin, isPending } = useSignin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  function handleUserForm({ email, password }) {
    signin(
      { email, password },
      {
        onSuccess: (data) => {
          if (data.token) {
            toast.success("User successfully Loggedin!");
            navigate("/");
          } else {
            toast.error("Please enter valid credentials");
          }
        },
      },
      {
        onError: () => {
          toast.error("Error occured while login into your account.");
        },
      }
    );
  }

  // Function to handle form submission

  const onSubmitForm = (data) => {
    handleUserForm(data); // Handle form submission
    reset();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex shadow min-h-full border-gray-800 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h1>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitForm)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full p-2.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  disabled={isPending}
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                />
                <span className="text-red-400 text-xs">
                  {errors?.email?.message}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full p-2.5 rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                <span className="text-red-400 text-xs">
                  {errors?.password?.message}
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500 pb-10">
            Not a member?
            <Link
              to="/register"
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
