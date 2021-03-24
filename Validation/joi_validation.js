// Importing Joi
const Joi = require('@hapi/joi');

// Validation Schema
const registerValidation = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
})


// created an object to check it's validation with "registerValidation" schema
const objectToValidate = {
    name: "Shamim Bin Nur",
    email: "shamim@gmail.com",
    password: "password123"
}

// will return error only if validation is not okay.
const { error } = registerValidation.validate(objectToValidate);

// if error occures
if(error){
    // logging the validation message
    console.log(error.details[0].message);
} else{
    console.log("Validation ok")
}



