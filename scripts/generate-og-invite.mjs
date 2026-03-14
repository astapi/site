import sharp from 'sharp';
import path from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const IMAGES_DIR = 'public/images/lootdive';
const OUTPUT = path.join(IMAGES_DIR, 'og-invite.png');

async function generate() {
  // Load and resize background to fill 1200x630
  const bg = await sharp(path.join(IMAGES_DIR, 'grassland.jpg'))
    .resize(WIDTH, HEIGHT, { fit: 'cover' })
    .toBuffer();

  // Scale up pixel art sprites (nearest-neighbor to keep crisp pixels)
  const SCALE = 3;

  const elementalist = await sharp(path.join(IMAGES_DIR, 'elementalist_battle.png'))
    .resize(90 * SCALE, 89 * SCALE, { kernel: 'nearest' })
    .toBuffer();

  const ENEMY_SCALE = 2;

  const SLIME_SCALE = 1.6;
  const slime = await sharp(path.join(IMAGES_DIR, 'slime.png'))
    .resize(Math.round(109 * SLIME_SCALE), Math.round(108 * SLIME_SCALE), { kernel: 'nearest' })
    .toBuffer();

  const wolf = await sharp(path.join(IMAGES_DIR, 'wolf.png'))
    .resize(96 * ENEMY_SCALE, 101 * ENEMY_SCALE, { kernel: 'nearest' })
    .toBuffer();

  const BAT_SCALE = 1.6;
  const bat = await sharp(path.join(IMAGES_DIR, 'giant_bat.png'))
    .resize(Math.round(125 * BAT_SCALE), Math.round(126 * BAT_SCALE), { kernel: 'nearest' })
    .toBuffer();

  const icon = await sharp(path.join(IMAGES_DIR, 'icon.png'))
    .resize(64, 64)
    .toBuffer();

  // Subtle dark vignette at bottom for text readability
  const overlay = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#000" stop-opacity="0"/>
          <stop offset="60%" stop-color="#000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
    </svg>`
  );

  // Title text with black fill and white stroke
  const textSvg = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <text x="${WIDTH / 2}" y="490" text-anchor="middle"
        font-family="Inter, -apple-system, sans-serif" font-size="42" font-weight="700"
        fill="#000000" stroke="#FFFFFF" stroke-width="4" paint-order="stroke fill"
        letter-spacing="2">
        ルートダイブ　ビルド構築ハクスラ周回RPG
      </text>
    </svg>`
  );

  // Search box UI
  const searchBoxWidth = 480;
  const searchBoxHeight = 52;
  const searchBoxX = (WIDTH - searchBoxWidth) / 2;
  const searchBoxY = 520;
  const searchBoxSvg = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <!-- Search box background -->
      <rect x="${searchBoxX}" y="${searchBoxY}" width="${searchBoxWidth}" height="${searchBoxHeight}"
        rx="12" ry="12" fill="#FFFFFF"/>
      <!-- Search icon -->
      <g transform="translate(${searchBoxX + 18}, ${searchBoxY + 14})">
        <circle cx="11" cy="11" r="8" fill="none" stroke="#8E8E93" stroke-width="2"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#8E8E93" stroke-width="2" stroke-linecap="round"/>
      </g>
      <!-- Search text -->
      <text x="${searchBoxX + 52}" y="${searchBoxY + 34}"
        font-family="Inter, -apple-system, sans-serif" font-size="22" font-weight="400"
        fill="#000000">
        ルートダイブ
      </text>
      <!-- Cursor -->
      <rect x="${searchBoxX + 195}" y="${searchBoxY + 12}" width="2" height="28"
        rx="1" fill="#007AFF"/>
      <!-- Hint text below -->
      <text x="${WIDTH / 2}" y="${searchBoxY + searchBoxHeight + 28}" text-anchor="middle"
        font-family="Inter, -apple-system, sans-serif" font-size="16" font-weight="400"
        fill="#FFFFFF" opacity="0.8">
        App Store で検索
      </text>
    </svg>`
  );

  // Bottom accent bar
  const bottomBar = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
      <rect x="0" y="${HEIGHT - 4}" width="${WIDTH}" height="4" fill="#BFFF00"/>
    </svg>`
  );

  // Center characters vertically in the scene
  const charY = 150;

  await sharp(bg)
    .composite([
      // Dark vignette
      { input: overlay, top: 0, left: 0 },
      // Player (left-center)
      { input: elementalist, top: charY + 10, left: 260 },
      // Enemies (triangle formation: wolf top-right, slime left, bat bottom-right)
      { input: wolf, top: charY - 20, left: 830 },
      { input: slime, top: charY + 100, left: 640 },
      { input: bat, top: charY + 130, left: 820 },
      // Text
      { input: textSvg, top: 0, left: 0 },
      // Search box
      { input: searchBoxSvg, top: 0, left: 0 },
      // Bottom accent bar
      { input: bottomBar, top: 0, left: 0 },
    ])
    .png()
    .toFile(OUTPUT);

  console.log(`Generated: ${OUTPUT}`);
}

generate().catch(console.error);
