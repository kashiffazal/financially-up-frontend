const sharp = require('sharp');
const fs = require('fs');

async function test() {
  const scratchDir = 'C:/Users/PC 3/.gemini/antigravity-ide/brain/0828a144-fbe3-4921-9d21-cb081076cd1d/scratch';
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

  // 1. page-hero-bg.jpg (night) with 60% dark green overlay
  const night = sharp('public/images/services/page-hero-bg.jpg').resize(1200, 600);
  const overlayDark = Buffer.from(
    `<svg width="1200" height="600"><defs>` +
    `<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">` +
    `<stop offset="0%" stop-color="#020b06" stop-opacity="0.75"/>` +
    `<stop offset="50%" stop-color="#012214" stop-opacity="0.60"/>` +
    `<stop offset="100%" stop-color="#020b06" stop-opacity="0.75"/>` +
    `</linearGradient></defs>` +
    `<rect width="1200" height="600" fill="url(#g)"/>` +
    `</svg>`
  );
  await night.composite([{ input: overlayDark }]).toFile(scratchDir + '/test-night-hero.jpg');

  // 2. page-hero-light-bg.jpg (day) with dark emerald overlay (inverted/darkened)
  const day = sharp('public/images/services/page-hero-light-bg.jpg').resize(1200, 600);
  const overlayDayInDark = Buffer.from(
    `<svg width="1200" height="600"><defs>` +
    `<linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">` +
    `<stop offset="0%" stop-color="#020b06" stop-opacity="0.88"/>` +
    `<stop offset="50%" stop-color="#012214" stop-opacity="0.80"/>` +
    `<stop offset="100%" stop-color="#020b06" stop-opacity="0.88"/>` +
    `</linearGradient></defs>` +
    `<rect width="1200" height="600" fill="url(#g2)"/>` +
    `</svg>`
  );
  await day.composite([{ input: overlayDayInDark }]).toFile(scratchDir + '/test-day-in-dark.jpg');

  console.log('Done rendering tests');
}
test();
