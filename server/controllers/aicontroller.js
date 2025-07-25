import { clerkClient } from "@clerk/express";
import sql from "../configs/db.js";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// PDF parsing temporarily disabled - will be fixed later
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateTitle = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt } = req.body;

        if (!prompt) {
            return res.json({ success: false, message: "Prompt is required" });
        }

        const plan = req.plan;
        const free_usage = req.free_usage;
        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const content = result.response.text();

        await sql`
            INSERT INTO creations (user_id, prompt, content, type)
            VALUES (${userId}, ${prompt}, ${content}, 'blog-title');
        `;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }

        res.json({ success: true, content });
    } catch (error) {
        console.error("Generate Title Error:", error);
        if (error.message.includes('API_KEY_INVALID')) {
            return res.json({ success: false, error: "Invalid API key. Please check your Gemini API configuration." });
        }
        if (error.message.includes('QUOTA_EXCEEDED')) {
            return res.json({ success: false, error: "API quota exceeded. Please check your Gemini API usage." });
        }
        res.json({ success: false, error: "Failed to generate title. Please try again." });
    }
};

















export const generateArticle = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, length } = req.body;

        if (!prompt) {
            return res.json({ success: false, message: "Prompt is required" });
        }

        const plan = req.plan;
        const free_usage = req.free_usage;
        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const enhancedPrompt = length ? `${prompt} (Target length: approximately ${length} words)` : prompt;
        const result = await model.generateContent(enhancedPrompt);
        const content = result.response.text();

        await sql`
            INSERT INTO creations (user_id, prompt, content, type)
            VALUES (${userId}, ${prompt}, ${content}, 'article')
        `;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }

        res.json({ success: true, content });
    } catch (error) {
        console.error("Generate Article Error:", error);
        if (error.message.includes('API_KEY_INVALID')) {
            return res.json({ success: false, error: "Invalid API key. Please check your Gemini API configuration." });
        }
        if (error.message.includes('QUOTA_EXCEEDED')) {
            return res.json({ success: false, error: "API quota exceeded. Please check your Gemini API usage." });
        }
        res.json({ success: false, error: "Failed to generate article. Please try again." });
    }
};








export const generateImage = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, publish } = req.body;

        if (!prompt) {
            return res.json({ success: false, message: "Prompt is required" });
        }

        const plan = req.plan;
        const free_usage = req.free_usage;
        if (plan !== 'premium') {
            return res.json({ success: false, message: "This feature is only available for premium subscriptions" });
        }

        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY },
            responseType: "arraybuffer",
            timeout: 30000 // 30 second timeout
        });

        const imageContent = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

        // Upload to Cloudinary
        const { secure_url } = await cloudinary.uploader.upload(imageContent);

        await sql`
            INSERT INTO creations (user_id, prompt, content, type, publish)
            VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})
        `;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            });
        }

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.error("Generate Image Error:", error);
        
        if (error.response) {
            const status = error.response.status;
            if (status === 402) {
                return res.json({ 
                    success: false, 
                    error: "ClipDrop API quota exceeded. Please check your ClipDrop account credits or upgrade your plan." 
                });
            }
            if (status === 401) {
                return res.json({ 
                    success: false, 
                    error: "Invalid ClipDrop API key. Please check your API configuration." 
                });
            }
            if (status === 429) {
                return res.json({ 
                    success: false, 
                    error: "Too many requests. Please wait a moment and try again." 
                });
            }
        }
        
        if (error.code === 'ECONNABORTED') {
            return res.json({ 
                success: false, 
                error: "Request timeout. Please try again with a simpler prompt." 
            });
        }
        
        res.json({ success: false, error: "Failed to generate image. Please try again later." });
    }
};









export const removeImageBackground = async (req, res) => {
    try {
        const { userId } = req.auth();
        const image = req.file;
        const plan = req.plan;

        if (!image) {
            return res.json({ success: false, message: "No image file provided" });
        }

        if (plan !== 'premium') {
            return res.json({
                success: false,
                message: "This feature is only available for premium subscriptions"
            });
        }

        const { secure_url } = await cloudinary.uploader.upload(image.path, {
            transformation: [{
                effect: "background_removal"
            }],
            timeout: 60000 // 60 second timeout for image processing
        });

        // Clean up uploaded file
        if (fs.existsSync(image.path)) {
            fs.unlinkSync(image.path);
        }

        await sql`
            INSERT INTO creations (user_id, prompt, content, type)
            VALUES (${userId}, 'Remove background from Image', ${secure_url}, 'image')
        `;

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.error("Remove Background Error:", error);
        
        // Clean up uploaded file even if there's an error
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        
        if (error.message.includes('Invalid image file')) {
            return res.json({ success: false, error: "Invalid image file. Please upload a valid image." });
        }
        if (error.message.includes('File size too large')) {
            return res.json({ success: false, error: "Image file too large. Please upload a smaller image." });
        }
        if (error.message.includes('timeout')) {
            return res.json({ success: false, error: "Image processing timeout. Please try with a smaller image." });
        }
        
        res.json({ success: false, error: "Failed to remove background. Please try again." });
    }
};









export const removeImageObject = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { object } = req.body;
        const image = req.file;
        const plan = req.plan;

        if (!image) {
            return res.json({ success: false, message: "No image file provided" });
        }

        if (!object) {
            return res.json({ success: false, message: "Object to remove not specified" });
        }

        if (plan !== 'premium') {
            return res.json({
                success: false,
                message: "This feature is only available for premium subscriptions"
            });
        }

        const { public_id } = await cloudinary.uploader.upload(image.path);

        const imageUrl = cloudinary.url(public_id, {
            transformation: [{
                effect: `gen_remove:${object}`
            }],
            resource_type: 'image'
        });

        // Clean up uploaded file
        fs.unlinkSync(image.path);

        await sql`
            INSERT INTO creations (user_id, prompt, content, type)
            VALUES (${userId}, ${`Removed ${object} from image`}, ${imageUrl}, 'image')
        `;

        res.json({ success: true, content: imageUrl });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, error: error.message });
    }
};







export const resumereview = async (req, res) => {
    try {
        // Clean up uploaded file
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        
        return res.json({ 
            success: false, 
            error: "Resume review feature is temporarily disabled. We're working on fixing the PDF parsing issue." 
        });
    } catch (error) {
        console.error("Resume Review Error:", error);
        
        // Clean up uploaded file even if there's an error
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
        
        res.json({ success: false, error: "Resume review feature is temporarily unavailable." });
    }
};


