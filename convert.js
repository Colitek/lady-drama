import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./public";
const outputFolder = "./public/images-webp";

// Upewnij się, że folder docelowy istnieje
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

(async () => {
  const files = fs.readdirSync(inputFolder);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      try {
        const inputPath = path.join(inputFolder, file);
        const baseName = path.parse(file).name;
        const outputPath = path.join(outputFolder, `${baseName}.webp`);

        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);

        console.log(`✅ Converted: ${file} → images-webp/${baseName}.webp`);
      } catch (err) {
        console.error(`❌ Error converting ${file}:`, err);
      }
    }
  }
})();
