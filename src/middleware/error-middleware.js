import { ResponseError } from "../error/response-error.js";
import pkg from 'joi';
const { ValidationError } = pkg;

const errorMiddleware = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
      })
      .end();
  } else if (err instanceof ValidationError) {
    res,
      send(400)
        .json({
          errors: err.message,
        })
        .end();
  } else {
    res
      .status(500)
      .json({
        errors: err.message,
      })
      .end();
  }
};


export {
    errorMiddleware
}