// sitemap-generator.js

const { sitemapBuilder } = require('react-router-sitemap');
const fs = require('fs');

// --- Define Your Routes ---
// This is a simple array of all the paths you want in your sitemap.
// You can add more paths here, e.g., { path: '/about' }, { path: '/projects' }
const routes = [
    { path: '/' },
];

// --- Configuration ---
const hostname = 'https://prakashwardhan.netlify.app'; // Your website's domain
const dest = './public/sitemap.xml'; // The destination file

// --- Generation ---
console.log("Generating sitemap...");

// Build the sitemap
const sitemap = sitemapBuilder(hostname, routes);
// Get the XML string
const xml = sitemap.toString();
// Write the file to the public directory
fs.writeFileSync(dest, xml);

console.log(`Sitemap generated successfully and saved to ${dest}`);
