const Joi = require("joi");
const { Schema, model } = require("mongoose");


const {hendleMongooseError} = require("../helpers")

const genderList = ["woman", "man"];
const dataPhone = /^\d{2}-\d{2}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: dataPhone,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    gender:{
        type: String,
        enum: genderList,
        required: true,
    }
  },
  { versionKey: false, timestamps: true }
);



const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().pattern(dataPhone).required(),
    favorite: Joi.boolean(),
    gender: Joi.string().valid(...genderList).required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    addSchema,
    updateFavoriteSchema,
};

contactSchema.post("save", hendleMongooseError);

const Contact = model("contact", contactSchema);


module.exports = {
    Contact,
    schemas,
}
