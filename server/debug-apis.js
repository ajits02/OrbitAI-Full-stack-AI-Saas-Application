import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Test Gemini API
async function testGemini() {
    try {
        console.log("🧪 Testing Gemini API...");
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello");
        console.log("✅ Gemini API: SUCCESS");
        return true;
    } catch (error) {
        console.log("❌ Gemini API: FAILED");
        console.log("Error:", error.message);
        return false;
    }
}

// Test ClipDrop API
async function testClipDrop() {
    try {
        console.log("🧪 Testing ClipDrop API...");
        const formData = new FormData();
        formData.append('prompt', 'test');
        
        await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY },
            responseType: "arraybuffer",
            timeout: 10000
        });
        console.log("✅ ClipDrop API: SUCCESS");
        return true;
    } catch (error) {
        console.log("❌ ClipDrop API: FAILED");
        console.log("Error:", error.message);
        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Status Text:", error.response.statusText);
        }
        return false;
    }
}

// Test Cloudinary
async function testCloudinary() {
    try {
        console.log("🧪 Testing Cloudinary...");
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        
        // Test with a simple ping
        const result = await cloudinary.api.ping();
        console.log("✅ Cloudinary API: SUCCESS");
        return true;
    } catch (error) {
        console.log("❌ Cloudinary API: FAILED");
        console.log("Error:", error.message);
        return false;
    }
}

// Run all tests
async function runAllTests() {
    console.log("🔍 DEBUGGING ALL APIS...\n");
    
    const geminiResult = await testGemini();
    console.log("");
    
    const clipdropResult = await testClipDrop();
    console.log("");
    
    const cloudinaryResult = await testCloudinary();
    console.log("");
    
    console.log("📊 SUMMARY:");
    console.log(`Gemini: ${geminiResult ? '✅' : '❌'}`);
    console.log(`ClipDrop: ${clipdropResult ? '✅' : '❌'}`);
    console.log(`Cloudinary: ${cloudinaryResult ? '✅' : '❌'}`);
    
    if (!geminiResult || !clipdropResult || !cloudinaryResult) {
        console.log("\n🚨 NETWORK ERRORS FOUND! Check the failed APIs above.");
    } else {
        console.log("\n🎉 ALL APIS WORKING!");
    }
}

runAllTests();