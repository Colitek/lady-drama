import sharp from "sharp";
import fs from "fs";

const inputFolder = "./public";
const outputFolder = "./images-webp";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

(async () => {
  const files = fs.readdirSync(inputFolder);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      try {
        await sharp(`${inputFolder}/${file}`)
          .webp({ quality: 85 })
          .toFile(`${outputFolder}/${file.split(".")[0]}.webp`);
        console.log(`✅ Converted: ${file}`);
      } catch (err) {
        console.error(`❌ Error: ${file}`, err);
      }
    }
  }
})();
