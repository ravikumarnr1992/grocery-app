import axios from "axios";

export async function signupUser({ fullName, email, password }) {
  const { data, error } = await axios.post(
    "https://backend-api-2qaj.onrender.com/users/register",
    {
      fullName,
      email,
      password,
    }
  );
  if (error) throw new Error(error.message);
  return data;
}

export async function signinUser({ email, password }) {
  const { data, error } = await axios.post(
    "https://backend-api-2qaj.onrender.com/users/login",
    {
      email,
      password,
    }
  );
  console.log(data);
  localStorage.setItem("token", data.token);
  if (error) throw new Error(error.message);
  return data;
}
