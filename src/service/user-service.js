import { validate } from "../validation/validation.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { ResponseError } from "../error/response-error.js";

const register = async (request) => {
  const user = validate(registerUserValidation, request);
  return user
};

export default { register };
