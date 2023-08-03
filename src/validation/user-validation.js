import Joi from 'joi'

const registerUserValidation = Joi.object({
    email : Joi.string().required,
    password : Joi.string().required
})

export {
    registerUserValidation
}