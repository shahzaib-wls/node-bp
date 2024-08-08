function responseHandler(res, status, result, message) {
    return res.status(status).json({
        status,
        result,
        message
    });
}

 export default responseHandler;