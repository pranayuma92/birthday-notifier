import express from 'express';
import userRoutes from './routes/userRoutes';
import { syncModels } from './models';
import './utils/cronJobs';
import './config/dotenv';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}).catch(console.error);