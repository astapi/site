import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Colors matching the design system
const bgColor = '#f5f1e8';
const textColor = '#1a1512';

async function generateOGImage() {
  console.log('Generating OG image...');

  // Read the logo
  const logo = sharp(join(projectRoot, 'src/assets/astapi_element.png'));
  const logoMetadata = await logo.metadata();

  // Resize logo to fit nicely in OG image (300px height)
  const resizedLogo = await logo
    .resize(null, 300, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const resizedLogoMeta = await sharp(resizedLogo).metadata();
  const logoWidth = resizedLogoMeta.width;
  const logoHeight = resizedLogoMeta.height;

  // Calculate centered position for logo
  const logoLeft = Math.round((1200 - logoWidth) / 2);
  const logoTop = 140;

  // Create text-only SVG (transparent background)
  const svgText = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="600" y="500" font-family="Arial, sans-serif" font-size="56" font-weight="600" fill="${textColor}" text-anchor="middle" letter-spacing="-0.02em">astapi Games</text>
    </svg>
  `;

  // Create base background, then composite logo and text on top
  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: bgColor
    }
  })
  .composite([
    {
      input: resizedLogo,
      top: logoTop,
      left: logoLeft
    },
    {
      input: Buffer.from(svgText),
      top: 0,
      left: 0
    }
  ])
  .png()
  .toFile(join(projectRoot, 'public/og-image.png'));

  console.log('✓ OG image generated: public/og-image.png');
}

async function generateFavicons() {
  console.log('Generating favicons...');

  const logo = sharp(join(projectRoot, 'src/assets/astapi_element.png'));

  // favicon-32x32.png
  await logo
    .clone()
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(projectRoot, 'public/favicon-32x32.png'));
  console.log('✓ Generated: public/favicon-32x32.png');

  // favicon-16x16.png
  await logo
    .clone()
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(projectRoot, 'public/favicon-16x16.png'));
  console.log('✓ Generated: public/favicon-16x16.png');

  // apple-touch-icon.png (180x180)
  await logo
    .clone()
    .resize(180, 180, { fit: 'contain', background: { r: 245, g: 241, b: 232, alpha: 1 } })
    .png()
    .toFile(join(projectRoot, 'public/apple-touch-icon.png'));
  console.log('✓ Generated: public/apple-touch-icon.png');

  // favicon.ico (32x32) - using png format
  await logo
    .clone()
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(projectRoot, 'public/favicon.png'));
  console.log('✓ Generated: public/favicon.png');
}

async function main() {
  try {
    await generateOGImage();
    await generateFavicons();
    console.log('\n✓ All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

main();
