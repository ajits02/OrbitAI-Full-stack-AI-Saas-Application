import express from "express";
import { auth } from "../middlewares/auth.js";
import { generateArticle, generateTitle, generateImage, removeImageBackground, resumereview, removeImageObject } from "../controllers/aicontroller.js";
import { upload } from "../configs/multer.js";

const aiRouter = express.Router();

// Text generation routes
aiRouter.post('/generate-article', auth, generateArticle);
aiRouter.post('/generate-blog-title', auth, generateTitle);

// Image generation routes
aiRouter.post('/generate-image', auth, generateImage);
aiRouter.post('/remove-image-background', upload.single('image'), auth, removeImageBackground);
aiRouter.post('/remove-image-object', upload.single('image'), auth, removeImageObject);

// Resume review route
aiRouter.post('/resume-review', upload.single('resume'), auth, resumereview);

export default aiRouter;