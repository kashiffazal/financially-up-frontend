const sharp = require('sharp');

async function testOverlay() {
  const scratchDir = 'C:/Users/PC 3/.gemini/antigravity-ide/brain/0828a144-fbe3-4921-9d21-cb081076cd1d/scratch';

  // Test 1: page-hero-bg.jpg with 75% image opacity and 72% dark overlay
  const nightBase = await sharp('public/images/services/page-hero-bg.jpg')
    .resize(1400, 700)
    .toBuffer();

  // Dark overlay svg with gradient and sample text
  const overlaySvg1 = Buffer.from(`
    <svg width="1400" height="700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="darkGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#020b06" stop-opacity="0.82" />
          <stop offset="50%" stop-color="#012214" stop-opacity="0.68" />
          <stop offset="100%" stop-color="#020b06" stop-opacity="0.80" />
        </linearGradient>
      </defs>
      <rect width="1400" height="700" fill="url(#darkGrad1)" />
      <!-- Ambient glow -->
      <circle cx="1000" cy="150" r="300" fill="#10b981" fill-opacity="0.12" filter="blur(60px)" />
      <!-- Sample UI text -->
      <text x="100" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#34d399">PILLAR 1.1 • PERSONAL TAX PRACTICE</text>
      <text x="100" y="240" font-family="sans-serif" font-size="38" font-weight="bold" fill="#ffffff">Individual Tax Return</text>
      <text x="100" y="290" font-family="sans-serif" font-size="38" font-weight="bold" fill="#ffffff">Services in Australia</text>
      <text x="100" y="340" font-family="sans-serif" font-size="18" fill="#34d399">Professional Personal Tax Preparation &amp; Lodgement</text>
      <text x="100" y="390" font-family="sans-serif" font-size="15" fill="#cbd5e1" width="500">An individual tax return can become more involved when you have income</text>
      <text x="100" y="415" font-family="sans-serif" font-size="15" fill="#cbd5e1">beyond salary and wages. Investment property, capital gains, crypto assets...</text>
    </svg>
  `);

  await sharp(nightBase)
    .composite([{ input: overlaySvg1 }])
    .toFile(scratchDir + '/test-dark-hero-mockup-night.jpg');

  // Test 2: what if page-hero-light-bg.jpg is used in dark mode?
  const dayBase = await sharp('public/images/services/page-hero-light-bg.jpg')
    .resize(1400, 700)
    .toBuffer();

  const overlaySvg2 = Buffer.from(`
    <svg width="1400" height="700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="darkGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#020b06" stop-opacity="0.88" />
          <stop offset="50%" stop-color="#012214" stop-opacity="0.78" />
          <stop offset="100%" stop-color="#020b06" stop-opacity="0.86" />
        </linearGradient>
      </defs>
      <rect width="1400" height="700" fill="url(#darkGrad2)" />
      <!-- Ambient glow -->
      <circle cx="1000" cy="150" r="300" fill="#10b981" fill-opacity="0.12" filter="blur(60px)" />
      <!-- Sample UI text -->
      <text x="100" y="180" font-family="sans-serif" font-size="14" font-weight="bold" fill="#34d399">PILLAR 1.1 • PERSONAL TAX PRACTICE</text>
      <text x="100" y="240" font-family="sans-serif" font-size="38" font-weight="bold" fill="#ffffff">Individual Tax Return</text>
      <text x="100" y="290" font-family="sans-serif" font-size="38" font-weight="bold" fill="#ffffff">Services in Australia</text>
      <text x="100" y="340" font-family="sans-serif" font-size="18" fill="#34d399">Professional Personal Tax Preparation &amp; Lodgement</text>
      <text x="100" y="390" font-family="sans-serif" font-size="15" fill="#cbd5e1">An individual tax return can become more involved when you have income</text>
      <text x="100" y="415" font-family="sans-serif" font-size="15" fill="#cbd5e1">beyond salary and wages. Investment property, capital gains, crypto assets...</text>
    </svg>
  `);

  await sharp(dayBase)
    .composite([{ input: overlaySvg2 }])
    .toFile(scratchDir + '/test-dark-hero-mockup-day.jpg');

  console.log('Mockups generated');
}

testOverlay();
