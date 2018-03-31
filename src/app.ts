import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import * as userControlller from './controllers/user';

class App {
  public express;
  public router;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.middleWare();
    this.mountRoutes();

    // Load enviromnet variables to process.env from .env file
    dotenv.config({ path: '.env' });

    // Connect to MongoDB
    const mongoUrl = process.env.MONGODB_URI;
    mongoose.connect(mongoUrl).then(() => {
      console.log('MongoDB connection established ' + mongoUrl);
    }, ).catch(err => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    });
  }

  private middleWare(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      preflightContinue: false
    };

    this.router.use(cors(options));
    this.router.options('*', cors(options));
    this.express.use(compression());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use((err, req, res, next) => {
      res.status(500).send(err.toString());
    })
  }

  private mountRoutes(): void {
    this.router.get('/user', userControlller.get);
    this.router.get('/user/:name', userControlller.get);
    this.router.post('/user', userControlller.insert);

    this.express.use('/api', this.router);
  }
}

export default new App().express;
