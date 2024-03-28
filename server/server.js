import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/property.routes.js';


const app = express();

app.use(express.json(), cors());
//Any requests that have /api is sent to router
app.use('/api', router);

dotenv.config();
const PORT = process.env.PORT;
dbConnect();


app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);