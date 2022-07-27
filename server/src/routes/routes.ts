import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { engineerController } from '../controllers/engineerController';
const router = express.Router();

router.get('/engineers', engineerController.getEngineers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.engineers)
});

router.post('/engineers', engineerController.addEngineers, (req: Request, res: Response) => {
  res.status(200).json(res.locals.newEngineer)
});

module.exports = router;