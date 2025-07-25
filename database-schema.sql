-- Database Schema for OrbitAI Application

-- Create creations table
CREATE TABLE IF NOT EXISTS creations (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    prompt TEXT NOT NULL,
    content TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    publish BOOLEAN DEFAULT FALSE,
    likes TEXT[] DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_creations_user_id ON creations(user_id);
CREATE INDEX IF NOT EXISTS idx_creations_type ON creations(type);
CREATE INDEX IF NOT EXISTS idx_creations_publish ON creations(publish);
CREATE INDEX IF NOT EXISTS idx_creations_created_at ON creations(created_at);

-- Sample data (optional)
-- INSERT INTO creations (user_id, prompt, content, type, publish) 
-- VALUES ('sample_user', 'Test prompt', 'Test content', 'article', true);