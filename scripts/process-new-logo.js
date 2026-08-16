import sharp from 'sharp';
import path from 'path';

const sourcePath = 'C:/Users/UsEr/.gemini/antigravity-ide/brain/26a12a59-0fe1-4458-bb89-01637ae89e7b/.user_uploaded/media_1786854247386.jpg';
const publicGambarDir = path.resolve('public', 'Gambar');
const publicDir = path.resolve('public');

async function processLogo() {
  console.log('--- Generating High-Precision Transparent Circular Logo ---');
  
  const { data, info } = await sharp(sourcePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const cx = 512.0;
  const cy = 512.0;
  const radius = 506.0; // Exact outer edge of dark blue circular emblem

  const outBuffer = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const outIdx = (y * width + x) * 4;
      const srcIdx = (y * width + x) * info.channels;
      
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (dist > radius + 1.0) {
        // Outside circular emblem: 100% transparent
        outBuffer[outIdx] = 0;
        outBuffer[outIdx + 1] = 0;
        outBuffer[outIdx + 2] = 0;
        outBuffer[outIdx + 3] = 0;
      } else if (dist > radius - 1.0) {
        // Smooth anti-aliased edge feathering
        const alphaFactor = Math.max(0, Math.min(1, (radius + 1.0 - dist) / 2.0));
        outBuffer[outIdx] = r;
        outBuffer[outIdx + 1] = g;
        outBuffer[outIdx + 2] = b;
        outBuffer[outIdx + 3] = Math.round(255 * alphaFactor);
      } else {
        // Inside circular emblem: 100% opaque
        outBuffer[outIdx] = r;
        outBuffer[outIdx + 1] = g;
        outBuffer[outIdx + 2] = b;
        outBuffer[outIdx + 3] = 255;
      }
    }
  }

  const baseImg = sharp(outBuffer, {
    raw: {
      width,
      height,
      channels: 4
    }
  });

  // 1. Save PNG formats
  await baseImg.clone().png({ quality: 100, compressionLevel: 9 }).toFile(path.join(publicGambarDir, 'logo.png'));
  await baseImg.clone().png({ quality: 100, compressionLevel: 9 }).toFile(path.join(publicDir, 'logo.png'));
  await baseImg.clone().resize(192, 192).png().toFile(path.join(publicDir, 'favicon.png'));

  // 2. Save AVIF formats
  await baseImg.clone().avif({ quality: 92, effort: 6 }).toFile(path.join(publicGambarDir, 'logo.avif'));
  await baseImg.clone().avif({ quality: 92, effort: 6 }).toFile(path.join(publicDir, 'logo.avif'));
  await baseImg.clone().resize(192, 192).avif({ quality: 92, effort: 6 }).toFile(path.join(publicDir, 'favicon.avif'));

  console.log('✓ Transparent logo and favicon (PNG & AVIF) created successfully!');
}

processLogo().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
