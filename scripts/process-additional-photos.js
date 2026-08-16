import sharp from 'sharp';
import path from 'path';

const uploadsDir = 'C:/Users/UsEr/.gemini/antigravity-ide/brain/26a12a59-0fe1-4458-bb89-01637ae89e7b/.user_uploaded';
const outputDir = path.resolve('public', 'Gambar');

const images = [
  { file: 'media_1786854910455.jpg', out: 'gallery-sunrise-clouds.avif' },
  { file: 'media_1786854914646.jpg', out: 'gallery-couple-clouds.avif' },
  { file: 'media_1786854941826.jpg', out: 'gallery-sembalun-rinjani-view.avif' }
];

async function convertAdditional() {
  console.log('Converting 3 additional customer gallery photos to AVIF...');
  for (const img of images) {
    const inPath = path.join(uploadsDir, img.file);
    const outPath = path.join(outputDir, img.out);
    console.log(`Processing: ${img.file} -> ${img.out}`);
    await sharp(inPath)
      .avif({ quality: 85, effort: 6 })
      .toFile(outPath);
    console.log(`✓ Created ${img.out}`);
  }
  console.log('All 3 additional photos converted to AVIF!');
}

convertAdditional().catch(err => {
  console.error(err);
  process.exit(1);
});
