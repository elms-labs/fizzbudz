import express, { Request, Response, RequestHandler } from 'express';
import authController from '../controllers/authController';
const router = express.Router();



router.post('/auth/github', authController, (req,res,next) => {
    console.log(res);
})




export default router;