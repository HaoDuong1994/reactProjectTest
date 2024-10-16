const Validate = (value) => {
  const error = {};
  const email_patter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (value.name === "") {
    error.name = "Name can not empty";
  }
  if (value.email === "") {
    error.email = "Email can not empty";
  }
  if (!email_patter.test(value.email)) {
    error.email = "Invalid email";
  }
  if (value.password === "") {
    error.password = "Password can not empty";
  }
  if (value.repassword === "") {
    error.repassword = "Repassword can not empty";
  }
  return error;
};
export default Validate;
