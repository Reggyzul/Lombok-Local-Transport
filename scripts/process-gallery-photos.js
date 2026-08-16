import sharp from 'sharp';
import path from 'path';

const uploadsDir = 'C:/Users/UsEr/.gemini/antigravity-ide/brain/26a12a59-0fe1-4458-bb89-01637ae89e7b/.user_uploaded';
const outputDir = path.resolve('public', 'Gambar');

const images = [
  { file: 'media_1786854701019.jpg', out: 'gallery-beleq.avif' },
  { file: 'media_1786854713292.jpg', out: 'gallery-gili-boat.avif' },
  { file: 'media_1786854722624.jpg', out: 'gallery-swing.avif' },
  { file: 'media_1786854731821.jpg', out: 'gallery-ridge.avif' },
  { file: 'media_1786854737558.jpg', out: 'gallery-rinjani-caldera.avif' }
];

async function convertGallery() {
  console.log('Converting 5 new customer gallery photos to AVIF...');
  for (const img of images) {
    const inPath = path.join(uploadsDir, img.file);
    const outPath = path.join(outputDir, img.out);
    console.log(`Processing: ${img.file} -> ${img.out}`);
    await sharp(inPath)
      .avif({ quality: 85, effort: 6 })
      .toFile(outPath);
    console.log(`✓ Created ${img.out}`);
  }
  console.log('All 5 gallery photos converted to AVIF!');
}

convertGallery().catch(err => {
  console.error(err);
  process.exit(1);
});
