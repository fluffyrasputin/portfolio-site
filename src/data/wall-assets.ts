export type WallAssetItem = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  alt?: string;
  fit?: "cover" | "contain";
};

export const wallDesktopAssets = {
  topPortrait: "/media/wall/desktop-top-portrait.png",
  memorialIllustration: "/media/wall/desktop-memorial-illustration.png",
};

export const wallDesktopPraiseItems: WallAssetItem[] = [
  { src: "/media/wall/desktop-praise-major-grom.png", x: 0, y: 0, width: 620, height: 349 },
  { src: "/media/wall/desktop-praise-header-note.png", x: 0, y: 381, width: 306, height: 83 },
  { src: "/media/wall/desktop-praise-small-caption.png", x: 0, y: 472, width: 306, height: 58 },
  { src: "/media/wall/desktop-praise-main-portrait.png", x: 314, y: 381, width: 270, height: 287 },
  { src: "/media/wall/desktop-praise-quote-card.png", x: 157, y: 542, width: 149, height: 84 },
  { src: "/media/wall/desktop-praise-review-column.png", x: 0, y: 638, width: 306, height: 690 },
  { src: "/media/wall/desktop-praise-horizontal-review.png", x: 314, y: 680, width: 306, height: 56 },
  { src: "/media/wall/desktop-praise-square-card.png", x: 314, y: 748, width: 177, height: 228 },
  { src: "/media/wall/desktop-praise-photo-left.png", x: 314, y: 988, width: 154, height: 273 },
  { src: "/media/wall/desktop-praise-photo-right.jpg", x: 476, y: 988, width: 143, height: 191 },
  { src: "/media/wall/desktop-praise-line-quote.png", x: 1, y: 1340, width: 305, height: 38 },
  { src: "/media/wall/desktop-praise-second-line-quote.png", x: 1, y: 1390, width: 305, height: 50 },
  { src: "/media/wall/desktop-praise-third-line-quote.png", x: 16, y: 1452, width: 290, height: 45 },
  { src: "/media/wall/desktop-praise-wide-quote.png", x: 106, y: 1509, width: 200, height: 75 },
  { src: "/media/wall/desktop-praise-vertical-card.png", x: 314, y: 1273, width: 177, height: 197 },
  { src: "/media/wall/desktop-praise-bottom-photo.jpg", x: 314, y: 1482, width: 305, height: 177 },
];

export const wallDesktopMemorialItems: WallAssetItem[] = [
  { src: "/media/wall/desktop-memorial-product-left.png", x: 1, y: 0, width: 150, height: 215 },
  { src: "/media/wall/desktop-memorial-product-right.png", x: 159, y: 15, width: 150, height: 201 },
  { src: "/media/wall/desktop-memorial-main-poster.png", x: 343, y: 151, width: 277, height: 390 },
  { src: "/media/wall/desktop-memorial-bottom-banner.png", x: 343, y: 712, width: 277, height: 124, fit: "contain" },
  { src: "/media/wall/desktop-memorial-large-collage.png", x: 0, y: 565, width: 306, height: 512 },
  { src: "/media/wall/desktop-memorial-bottom-collage.png", x: 105, y: 1333, width: 410, height: 430 },
  { src: "/media/wall/desktop-memorial-center-packshot.png", x: 152, y: 413, width: 157, height: 125 },
  { src: "/media/wall/desktop-memorial-top-sticker.png", x: 204, y: 242, width: 105, height: 144 },
  { src: "/media/wall/desktop-memorial-left-label.jpg", x: 0, y: 271, width: 151, height: 85 },
  { src: "/media/wall/desktop-memorial-header-strip.png", x: 343, y: 585, width: 153, height: 74 },
  { src: "/media/wall/desktop-memorial-round-logo.jpg", x: 107, y: 1104, width: 196, height: 196 },
  { src: "/media/wall/desktop-memorial-vertical-poster.png", x: 314, y: 894, width: 201, height: 406 },
  { src: "/media/wall/desktop-memorial-small-icon.png", x: 520, y: 585, width: 100, height: 94 },
  { src: "/media/wall/desktop-memorial-mini-pack.png", x: 1, y: 1104, width: 95, height: 130 },
  { src: "/media/wall/desktop-memorial-small-pack.png", x: 523, y: 890, width: 97, height: 121 },
  { src: "/media/wall/desktop-memorial-thin-pack.png", x: 523, y: 1137, width: 97, height: 168 },
  { src: "/media/wall/desktop-memorial-mini-label.jpg", x: 523, y: 1035, width: 97, height: 78 },
];

export const wallMobileAssets = {
  topPortrait: "/media/wall/mobile-top-portrait.png",
  memorialIllustration: "/media/wall/mobile-memorial-illustration.png",
};

export const wallMobilePraiseItems: WallAssetItem[] = [
  { src: "/media/wall/mobile-praise-major-grom.png", x: 0, y: 0, width: 359, height: 202 },
  { src: "/media/wall/mobile-praise-header-note.png", x: 0, y: 234, width: 358, height: 97 },
  { src: "/media/wall/mobile-praise-main-review.png", x: 21, y: 343, width: 317, height: 337 },
  { src: "/media/wall/mobile-praise-wide-strip.png", x: 0, y: 690, width: 358, height: 68 },
  { src: "/media/wall/mobile-praise-left-column.png", x: 0, y: 770, width: 177, height: 399 },
  { src: "/media/wall/mobile-praise-right-card.png", x: 181, y: 920, width: 177, height: 100 },
  { src: "/media/wall/mobile-praise-mid-strip.png", x: 0, y: 1508, width: 358, height: 65 },
  { src: "/media/wall/mobile-praise-right-photo.png", x: 181, y: 1073, width: 176, height: 226 },
  { src: "/media/wall/mobile-praise-left-photo.png", x: 0, y: 1181, width: 178, height: 315 },
  { src: "/media/wall/mobile-praise-lower-card.jpg", x: 0, y: 1585, width: 177, height: 236 },
  { src: "/media/wall/mobile-praise-line-quote.png", x: 0, y: 2042, width: 358, height: 45 },
  { src: "/media/wall/mobile-praise-vertical-card.png", x: 0, y: 1833, width: 177, height: 197 },
  { src: "/media/wall/mobile-praise-second-line-quote.png", x: 0, y: 2099, width: 357, height: 58 },
  { src: "/media/wall/mobile-praise-third-line-quote.png", x: 9, y: 2169, width: 340, height: 53 },
  { src: "/media/wall/mobile-praise-bottom-photo.jpg", x: 0, y: 2234, width: 358, height: 208 },
  { src: "/media/wall/mobile-praise-right-caption.png", x: 181, y: 1800, width: 177, height: 66 },
];

export const wallMobileMemorialItems: WallAssetItem[] = [
  { src: "/media/wall/mobile-memorial-large-collage.png", x: 26, y: 1764, width: 306, height: 512 },
  { src: "/media/wall/mobile-memorial-product-left.png", x: 30, y: 0, width: 150, height: 215 },
  { src: "/media/wall/mobile-memorial-product-right.png", x: 188, y: 15, width: 150, height: 201 },
  { src: "/media/wall/mobile-memorial-bottom-collage.png", x: 14, y: 2532, width: 331, height: 347 },
  { src: "/media/wall/mobile-memorial-center-packshot.png", x: 101, y: 413, width: 157, height: 125 },
  { src: "/media/wall/mobile-memorial-top-sticker.png", x: 233, y: 242, width: 105, height: 144 },
  { src: "/media/wall/mobile-memorial-left-label.jpg", x: 29, y: 271, width: 151, height: 85 },
  { src: "/media/wall/mobile-memorial-round-logo.jpg", x: 136, y: 2303, width: 196, height: 196 },
  { src: "/media/wall/mobile-memorial-vertical-poster.png", x: 1, y: 1313, width: 201, height: 406 },
  { src: "/media/wall/mobile-memorial-mini-pack.png", x: 30, y: 2303, width: 95, height: 130 },
  { src: "/media/wall/mobile-memorial-header-strip.png", x: 41, y: 990, width: 153, height: 74 },
  { src: "/media/wall/mobile-memorial-main-poster.png", x: 40, y: 570, width: 277, height: 390 },
  { src: "/media/wall/mobile-memorial-wide-banner.png", x: -1, y: 1114, width: 361, height: 160, fit: "contain" },
  { src: "/media/wall/mobile-memorial-small-pack.png", x: 210, y: 1309, width: 97, height: 121 },
  { src: "/media/wall/mobile-memorial-small-icon.png", x: 218, y: 990, width: 100, height: 94 },
  { src: "/media/wall/mobile-memorial-thin-pack.png", x: 210, y: 1556, width: 97, height: 168 },
  { src: "/media/wall/mobile-memorial-mini-label.jpg", x: 210, y: 1454, width: 97, height: 78 },
];
