import yup from 'yup'

// Define your validation schema using yup
export const schema = yup.object().shape({
   name:yup.string().required(),
});

 
export const validateRequestBody = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();  
    } catch (err) {
      res.status(400).json({
        errors: err.errors,
      });
    }
  };
};

  