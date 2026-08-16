import sharp from 'sharp';

const src = 'C:/Users/UsEr/.gemini/antigravity-ide/brain/26a12a59-0fe1-4458-bb89-01637ae89e7b/.user_uploaded/media_1786854247386.jpg';
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
console.log('Image dimensions:', info.width, 'x', info.height);

// Check diagonal corner pixels (x=0..100, y=0..100) and find where the dark ring starts
const cx = 512, cy = 512;
// Check along diagonal towards (0,0)
for (let r = 512; r >= 350; r -= 2) {
  const angle = Math.PI * 1.25; // towards top-left corner
  const x = Math.round(cx + r * Math.cos(angle));
  const y = Math.round(cy + r * Math.sin(angle));
  if (x >= 0 && x < info.width && y >= 0 && y < info.height) {
    const idx = (y * info.width + x) * info.channels;
    const red = data[idx], green = data[idx+1], blue = data[idx+2];
    console.log(`Radius ${r} (x=${x}, y=${y}): rgb(${red}, ${green}, ${blue})`);
  }
}
