import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';


import {db} from './config/db.js';
import routes from './routes/index.js';
import ErrorHandler from './middlewares/error-middleware.js';
import loggerMiddleware from './middlewares/logger-middleware.js';

configDotenv();
const app = express();

app.use(bodyParser.json());

app.use(loggerMiddleware);
app.use('/api', routes);    

app.use( ErrorHandler );

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
