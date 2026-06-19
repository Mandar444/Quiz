import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages/1split_gold_s.png';
const outputPath = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages/1split_gold_s_test.png';

async function test() {
  try {
    console.log('Processing with flood-fill:', inputPath);
    if (!fs.existsSync(inputPath)) {
      console.error('Input not found');
      return;
    }
    
    // Load image and get raw pixel buffer
    const image = sharp(inputPath);
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
    
    // Flood fill algorithm to only whiten background pixels
    const width = info.width;
    const height = info.height;
    const channels = info.channels;
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    // Helper to push pixel to queue
    function enqueue(x, y) {
      if (x >= 0 && x < width && y >= 0 && y < height) {
        const idx = y * width + x;
        if (!visited[idx]) {
          visited[idx] = 1;
          queue.push(idx);
        }
      }
    }
    
    // Seed queue with all border pixels
    for (let x = 0; x < width; x++) {
      enqueue(x, 0);
      enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y++) {
      enqueue(0, y);
      enqueue(width - 1, y);
    }
    
    let head = 0;
    while (head < queue.length) {
      const idx = queue[head++];
      const x = idx % width;
      const y = Math.floor(idx / width);
      
      const pixelIdx = idx * channels;
      const r = data[pixelIdx];
      const g = data[pixelIdx + 1];
      const b = data[pixelIdx + 2];
      
      // Check if this pixel is light (greater than 215)
      if (r > 215 && g > 215 && b > 215) {
        // Set to pure solid white
        data[pixelIdx] = 255;
        data[pixelIdx + 1] = 255;
        data[pixelIdx + 2] = 255;
        if (channels === 4) {
          data[pixelIdx + 3] = 255;
        }
        
        // Add 4-connected neighbors
        enqueue(x + 1, y);
        enqueue(x - 1, y);
        enqueue(x, y + 1);
        enqueue(x, y - 1);
      }
    }
    
    // Convert raw buffer back to sharp and apply trim + padding
    await sharp(data, { raw: info })
      .trim()
      .extend({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        background: '#ffffff'
      })
      .flatten({ background: '#ffffff' })
      .toFile(outputPath);
      
    console.log('✅ Created test image with white background:', outputPath);
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
