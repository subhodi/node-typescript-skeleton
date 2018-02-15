import * as express from 'express';
import * as cors from "cors";

class App {
  public express;
  public router;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.middleWare();
    this.mountRoutes();
  }

  private middleWare(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: "*",
      preflightContinue: false
    };

    this.router.use(cors(options));
    this.router.options("*", cors(options));
  }

  private mountRoutes(): void {

    this.router.get('/', (req, res) => {
      res.json({ message: 'Hello World!' });
    });
    this.router.post('/home', (req, res) => {
      res.json({ message: 'Welcome Home!' });
    });

    this.express.use('/', this.router);
  }
}

module.exports= new App().express;
// export default new App().express;
