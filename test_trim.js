import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages/1velo_cobalt.png';
const outputPath = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages/1velo_cobalt_trimmed.png';

async function test() {
  try {
    console.log('Trimming:', inputPath);
    if (!fs.existsSync(inputPath)) {
      console.error('Input not found');
      return;
    }
    
    await sharp(inputPath)
      .trim()
      .toFile(outputPath);
      
    console.log('✅ Created trimmed PNG:', outputPath);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
