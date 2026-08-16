import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const publicGambarDir = path.join(rootDir, 'public', 'Gambar');
const publicDir = path.join(rootDir, 'public');

async function convertFileToAvif(inputPath, outputPath) {
  console.log(`Converting: ${inputPath} -> ${outputPath}`);
  const isPng = inputPath.toLowerCase().endsWith('.png');
  
  if (isPng) {
    // Preserve alpha transparency for logo.png
    await sharp(inputPath)
      .avif({ quality: 90, lossless: false, effort: 6 })
      .toFile(outputPath);
  } else {
    await sharp(inputPath)
      .avif({ quality: 85, effort: 6 })
      .toFile(outputPath);
  }
  console.log(`✓ Created: ${outputPath} (${fs.statSync(outputPath).size} bytes)`);
}

async function fetchAndSaveAvif(url, outputPath) {
  console.log(`Fetching & converting remote: ${url} -> ${outputPath}`);
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  await sharp(buffer)
    .avif({ quality: 85, effort: 6 })
    .toFile(outputPath);
  console.log(`✓ Fetched & saved: ${outputPath} (${fs.statSync(outputPath).size} bytes)`);
}

async function run() {
  console.log('--- Starting AVIF Image Conversion with JavaScript & Sharp ---');

  // 1. Convert all local images in public/Gambar
  const gambarFiles = fs.readdirSync(publicGambarDir);
  for (const file of gambarFiles) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const baseName = path.basename(file, ext);
      const inputPath = path.join(publicGambarDir, file);
      const outputPath = path.join(publicGambarDir, `${baseName}.avif`);
      await convertFileToAvif(inputPath, outputPath);
    }
  }

  // 2. Convert root public/logo.png & public/favicon.png
  if (fs.existsSync(path.join(publicDir, 'logo.png'))) {
    await convertFileToAvif(path.join(publicDir, 'logo.png'), path.join(publicDir, 'logo.avif'));
  }
  if (fs.existsSync(path.join(publicDir, 'favicon.png'))) {
    await convertFileToAvif(path.join(publicDir, 'favicon.png'), path.join(publicDir, 'favicon.avif'));
  }

  // 3. Fetch Sembalun image to make it a local AVIF
  const sembalunUrl = 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&q=80&w=1200';
  await fetchAndSaveAvif(sembalunUrl, path.join(publicGambarDir, 'sembalun.avif'));

  console.log('--- AVIF Image Conversion Completed Successfully ---');
}

run().catch((err) => {
  console.error('Error during AVIF conversion:', err);
  process.exit(1);
});
