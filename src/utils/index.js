const Joi = require('@hapi/joi');

export const SignUpValidation = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .min(8),

    confirmPassword: Joi.ref('password'),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', '.io', '.org'] } }),

    lastName: Joi.string()
        .required(),

    country: Joi.string()
        .uppercase()
        .required()

}).with('password', 'confirmPassword')
