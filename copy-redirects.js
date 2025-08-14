const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'public', '_redirects');
const destFile = path.join(__dirname, 'www', '_redirects');

try {
  // Create www directory if it doesn't exist
  const wwwDir = path.dirname(destFile);
  if (!fs.existsSync(wwwDir)) {
    fs.mkdirSync(wwwDir, { recursive: true });
  }
  
  // Copy the file
  fs.copyFileSync(sourceFile, destFile);
  console.log('Successfully copied _redirects file to www directory');
} catch (error) {
  console.error('Error copying _redirects file:', error.message);
  process.exit(1);
}
