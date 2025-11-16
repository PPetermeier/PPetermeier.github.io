#!/usr/bin/env node
/**
 * Recolor the original header.png by shifting its color palette to warm bronze.
 */

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Target color (warm bronze)
const TARGET_COLOR = '#d4a574';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h, s, l };
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

async function recolorImage() {
  // Load the original image
  const image = await loadImage('public/media/header.png');
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  // Draw the original image
  ctx.drawImage(image, 0, 0);

  // Get image data
  const imageData = ctx.getImageData(0, 0, image.width, image.height);
  const data = imageData.data;

  // Get target hue and saturation from our target color
  const targetRgb = hexToRgb(TARGET_COLOR);
  const targetHsl = rgbToHsl(targetRgb.r, targetRgb.g, targetRgb.b);

  // Process each pixel
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    // Convert to HSL
    const hsl = rgbToHsl(r, g, b);

    // Replace hue and saturation with target color's hue and saturation
    // Keep the original lightness to preserve the gradient structure
    const newHsl = {
      h: targetHsl.h,
      s: targetHsl.s * hsl.s / 0.3, // Scale saturation based on original
      l: hsl.l
    };

    // Convert back to RGB
    const newRgb = hslToRgb(newHsl.h, Math.min(1, newHsl.s), newHsl.l);

    data[i] = newRgb.r;
    data[i + 1] = newRgb.g;
    data[i + 2] = newRgb.b;
    // Keep original alpha
  }

  // Put the modified data back
  ctx.putImageData(imageData, 0, 0);

  return canvas;
}

// Main execution
(async () => {
  console.log('Loading original header.png...');
  const canvas = await recolorImage();

  const buffer = canvas.toBuffer('image/png');
  const outputPath = 'public/media/header_warm.png';

  fs.writeFileSync(outputPath, buffer);
  console.log(`Recolored header saved to ${outputPath}`);
  console.log(`Target color: ${TARGET_COLOR}`);
})();
