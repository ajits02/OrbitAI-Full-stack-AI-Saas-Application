import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import 'dotenv/config';

// Test Gemini API
async function testGeminiAPI() {
    try {
        console.log('Testing Gemini API...');
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello, this is a test");
        console.log('✅ Gemini API is working');
        return true;
    } catch (error) {
        console.log('❌ Gemini API failed:', error.message);
        return false;
    }
}

// Test ClipDrop API
async function testClipDropAPI() {
    try {
        console.log('Testing ClipDrop API...');
        const formData = new FormData();
        formData.append('prompt', 'test image');
        
        const response = await axios.post("https://clipdrop-api.co/text-to-image/v1", formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY },
            responseType: "arraybuffer",
            timeout: 10000
        });
        console.log('✅ ClipDrop API is working');
        return true;
    } catch (error) {
        console.log('❌ ClipDrop API failed:', error.response?.status, error.message);
        return false;
    }
}

// Test Database Connection
async function testDatabase() {
    try {
        console.log('Testing Database connection...');
        const { neon } = await import('@neondatabase/serverless');
        const sql = neon(process.env.DATABASE_URL);
        await sql`SELECT 1`;
        console.log('✅ Database connection is working');
        return true;
    } catch (error) {
        console.log('❌ Database connection failed:', error.message);
        return false;
    }
}

async function runTests() {
    console.log('🔍 Testing API connections...\n');
    
    const geminiWorking = await testGeminiAPI();
    const clipdropWorking = await testClipDropAPI();
    const dbWorking = await testDatabase();
    
    console.log('\n📊 Test Results:');
    console.log(`Gemini API: ${geminiWorking ? '✅' : '❌'}`);
    console.log(`ClipDrop API: ${clipdropWorking ? '✅' : '❌'}`);
    console.log(`Database: ${dbWorking ? '✅' : '❌'}`);
    
    if (!geminiWorking || !clipdropWorking || !dbWorking) {
        console.log('\n⚠️  Some services are not working. Check your API keys and configurations.');
    } else {
        console.log('\n🎉 All services are working correctly!');
    }
}

runTests();