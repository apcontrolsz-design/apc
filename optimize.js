const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images";

fs.readdir(inputDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return;

    const filePath = path.join(inputDir, file);
    const tempPath = path.join(inputDir, `temp-${file}`);

    sharp(filePath)
      .resize(1920, null, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 75 }) // Turunin quality ke 75
      .toFile(tempPath)
      .then((info) => {
        fs.renameSync(tempPath, filePath);
        console.log(`✓ ${file}: ${(info.size / 1024).toFixed(2)} KB`);
      })
      .catch((err) => console.error(`✗ ${file}:`, err));
  });
});
