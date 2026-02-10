const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images";

fs.readdir(inputDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(inputDir, outputName);

    sharp(inputPath)
      .resize(1920, null, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 75 })
      .toFile(outputPath)
      .then((info) => {
        fs.unlinkSync(inputPath); // hapus file lama
        console.log(
          `✓ ${file} → ${outputName} (${(info.size / 1024).toFixed(2)} KB)`,
        );
      })
      .catch((err) => console.error(`✗ ${file}:`, err));
  });
});
