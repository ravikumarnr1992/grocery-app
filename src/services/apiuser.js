export function signupUser({ fullName, email, password }) {
  const { data, error } = axios
    .post("https://backend-api-2qaj.onrender.com/order/list", {
      fullName,
      email,
      password,
    })
    .then(() => {
      console.log(data);
    })
    .catch(() => console.log(error));
}
