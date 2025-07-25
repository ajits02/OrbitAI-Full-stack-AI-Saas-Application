import express from "express";
import { auth } from "../middlewares/auth.js";
import { getUserCreations, getPublishedCreations, toggleLikeCreation } from "../controllers/userController.js";

const userRouter = express.Router();

// User creation routes
userRouter.get('/creations', auth, getUserCreations);
userRouter.get('/published', getPublishedCreations);
userRouter.post('/toggle-like', auth, toggleLikeCreation);

export default userRouter;