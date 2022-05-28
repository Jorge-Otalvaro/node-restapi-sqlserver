import express from "express";
import config from "./config";
import rolesRoutes from  "./routes/roles.routes";
import cors from 'cors';

const app = express();

// Ajustes
app.set('port', config.port);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

// enable all CORS request
app.use(cors());

app.use('/api/', rolesRoutes);

export default app