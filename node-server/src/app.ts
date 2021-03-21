import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { initRoutes } from './routes';

dotenv.config();

const app = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

app.use(cors());
app.use(express.json());
initRoutes(app);

try {
    app.listen(port, () => {
        console.log(`server is listening on ${port}`);
    });
}
catch (err) {
    console.log(err);
}