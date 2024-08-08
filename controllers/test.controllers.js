import responseHandler from "../helpers/response.helper.js";
import { Test } from "../models/Test.js";


export const getTest = async (req, res, next) => {

    try {
         
       const response = await Test.find();
        responseHandler(res, 200, response, "Data fetched successfully");

    } catch (error) {
        next(error)
    }
}

export const postTest = async (req, res, next) => {
    try {
        const response = await Test.create(req.body);
        responseHandler(res, 201, response, "Data created successfully");
    } catch (error) {
        next(error)
    }
}
