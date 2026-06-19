import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages';

async function trimAll() {
  try {
    const files = fs.readdirSync(dir).filter(f => 
      f.toLowerCase().endsWith('.png') && 
      !f.endsWith('_trimmed.png') && 
      !f.endsWith('_test.png') &&
      !f.startsWith('temp_')
    );
    console.log(`Found ${files.length} PNG files to process.`);
    
    let processed = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log(`[${processed + 1}/${files.length}] Processing: ${file}`);
      
      try {
        // Load image and get raw pixel buffer
        const image = sharp(filePath);
        const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
        
        // Threshold light pixels (RGB > 215) to solid white (255, 255, 255)
        for (let i = 0; i < data.length; i += info.channels) {
          if (data[i] > 215 && data[i+1] > 215 && data[i+2] > 215) {
            data[i] = 255;
            data[i+1] = 255;
            data[i+2] = 255;
            if (info.channels === 4) {
              data[i+3] = 255;
            }
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
          .toFile(tempPath);
          
        // Overwrite original with the processed file
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        processed++;
      } catch (err) {
        console.error(`❌ Failed to process ${file}:`, err);
      }
    }
    
    console.log(`\n🎉 Successfully processed ${processed} PNG files to solid white background!`);
  } catch (err) {
    console.error('Batch processing failed:', err);
  }
}

trimAll();
