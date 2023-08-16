const path = require('path');

// basename
console.log(path.basename(__filename));

// Current directory's name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create object Path
console.log(path.parse(__filename));

// Merge file paths
console.log(path.join(__dirname, 'new_path'));