import express, { Request, Response, NextFunction, RequestHandler } from 'express';
// import { playerController } from './playerController';

const app = express();

const engRouter = require('./routes/routes');

app.use(express.json());

// app.get('/api', playerController.getScores, (req, res, next) => res.json(res.locals.scores));
// app.post('/api', playerController.updateScores, (req, res, next) => res.json(res.locals.scores));

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