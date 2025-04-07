// Create a simple script called create-pwa-icons.js
import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

// Create a simple TV icon with "TV" text
const createIcon = (size) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#1976d2';
  ctx.fillRect(0, 0, size, size);

  // Text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TV', size/2, size/2);

  return canvas.toBuffer('image/png');
};

// Create icons in various sizes
const sizes = [192, 512];
sizes.forEach(size => {
  const iconData = createIcon(size);
  fs.writeFileSync(path.join('public', `logo${size}.png`), iconData);
  console.log(`Created logo${size}.png`);
});

// Create favicon
const faviconData = createIcon(64);
fs.writeFileSync(path.join('public', 'favicon.ico'), faviconData);
console.log('Created favicon.ico');
