// const Joi = require('@hapi/joi');
const Joi = require('joi');

const httpStatus = require('http-status');
const { pick } = require('lodash');
const AppError = require('../utils/AppError');

const validate = schema => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object);

    if (error) {
        const errorMessage = error.details.map(details => details.message).join(', ');
        return next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
};

module.exports = validate;


// module.exports = validateRequest;

// function validateRequest(req, next, schema) {
//     const options = {
//         abortEarly: false, // include all errors
//         allowUnknown: true, // ignore unknown props
//         stripUnknown: true // remove unknown props
//     };
//     const { error, value } = schema.validate(req.body, options);
//     if (error) {
//         const regex = /\"/g;
//         next(`${error.details.map(x => x.message).join(', ').replace(regex, '')}`);
//     } else {
//         req.body = value;
//         next();
//     }
// }