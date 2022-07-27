import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import apiRouter from './routes/apiRouter';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const engRouter = require('./routes/routes');

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "https://localhost:4000",
    credentials: true,
  })
);

app.use('/api', apiRouter);

app.use('/api', engRouter);

// Define server error type
type ServerError = {
    log: string,
    status: number,
    message: {err: string}
}

app.use('*', (req, res) => res.status(404).send('Woops! Page not found!'));

app.use('/', (err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(3000, () => console.log('server is listening on port 3000'));

module.exports = app;