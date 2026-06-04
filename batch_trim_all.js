import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/smand/OneDrive/Desktop/Unscenquize/public/productimages';

async function trimAll() {
  try {
    const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png') && !f.endsWith('_trimmed.png'));
    console.log(`Found ${files.length} PNG files to trim.`);
    
    let processed = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp_' + file);
      
      console.log(`[${processed + 1}/${files.length}] Trimming: ${file}`);
      
      try {
        await sharp(filePath)
          .trim()
          .toFile(tempPath);
          
        // Overwrite original with the trimmed file
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        processed++;
      } catch (err) {
        console.error(`❌ Failed to trim ${file}:`, err);
      }
    }
    
    console.log(`\n🎉 Successfully trimmed ${processed} PNG files!`);
  } catch (err) {
    console.error('Batch trimming failed:', err);
  }
}

trimAll();
