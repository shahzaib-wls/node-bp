export default function loggerMiddleware(req, res, next) {
    
        req.time = new Date(Date.now()).toString();
        console.log(req.method,req.hostname, req.path, req.time);
        next();
    }

    