const fs = require('fs');
const path = require('path');

// Read the .env file manually
const envPath = path.join(__dirname, '.env');
let apiKey = null;

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    // Match UNSPLASH_ACCESS_KEY=value (handles quotes, spaces, etc.)
    const match = envContent.match(/UNSPLASH_ACCESS_KEY\s*=\s*(.+?)(?:\s|$)/);
    if (match) {
        apiKey = match[1].trim().replace(/^["']|["']$/g, ''); // Remove quotes if present
    }
} catch (error) {
    console.error('Error reading .env file:', error.message);
}

// Fallback to environment variable if .env file doesn't exist
if (!apiKey) {
    apiKey = process.env.UNSPLASH_ACCESS_KEY;
}

if (!apiKey) {
    console.error('Error: UNSPLASH_ACCESS_KEY is not set in .env file or environment variables');
    console.error('Please create a .env file with: UNSPLASH_ACCESS_KEY=your_key_here');
    process.exit(1);
}

// Read the template script.js file
const scriptPath = path.join(__dirname, 'script.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Replace the placeholder with the actual API key
scriptContent = scriptContent.replace('{{UNSPLASH_ACCESS_KEY}}', apiKey);

// Write the updated script back
fs.writeFileSync(scriptPath, scriptContent, 'utf8');

console.log('✓ API key injected successfully into script.js');

